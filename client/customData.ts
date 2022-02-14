/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { workspace, extensions, Uri, EventEmitter, Disposable } from 'vscode';
import { Utils } from 'vscode-uri';

export function getCustomDataSource(toDispose: Disposable[], contextURI: Uri) {
	let pathsInWorkspace = getCustomDataPathsInAllWorkspaces();
	let pathsInExtensions = getCustomDataPathsFromAllExtensions();

	const defaultDataPath = Utils.joinPath(contextURI, 'data/panorama.css-data.json').toString();
	ensureDefaultData(pathsInWorkspace, pathsInExtensions, defaultDataPath);

	const onChange = new EventEmitter<void>();

	toDispose.push(extensions.onDidChange(_ => {
		const newPathsInExtensions = getCustomDataPathsFromAllExtensions();
		if (newPathsInExtensions.length !== pathsInExtensions.length || !newPathsInExtensions.every((val, idx) => val === pathsInExtensions[idx])) {
			pathsInExtensions = newPathsInExtensions;
			ensureDefaultData(pathsInWorkspace, pathsInExtensions, defaultDataPath);
			onChange.fire();
		}
	}));
	toDispose.push(workspace.onDidChangeConfiguration(e => {
		if (e.affectsConfiguration('panocss.customData')) {
			pathsInWorkspace = getCustomDataPathsInAllWorkspaces();
			ensureDefaultData(pathsInWorkspace, pathsInExtensions, defaultDataPath);
			onChange.fire();
		}
	}));

	return {
		get uris() {
			return pathsInWorkspace.concat(pathsInExtensions);
		},
		get onDidChange() {
			return onChange.event;
		}
	};
}

function ensureDefaultData(pathsInWorkspace: string[], pathsInExtensions: string[], defaultDataPath: string): void {
	// make sure we have at least our default data, as we are completely overriding the default data provider
	if (pathsInExtensions.length === 0 && pathsInWorkspace.length === 0)
		pathsInExtensions.push(defaultDataPath);
}

function getCustomDataPathsInAllWorkspaces(): string[] {
	const workspaceFolders = workspace.workspaceFolders;

	const dataPaths: string[] = [];

	if (!workspaceFolders) {
		return dataPaths;
	}

	const collect = (paths: string[] | undefined, rootFolder: Uri) => {
		if (Array.isArray(paths)) {
			for (const path of paths) {
				if (typeof path === 'string') {
					dataPaths.push(Utils.resolvePath(rootFolder, path).toString());
				}
			}
		}
	};

	for (let i = 0; i < workspaceFolders.length; i++) {
		const folderUri = workspaceFolders[i].uri;
		const allCssConfig = workspace.getConfiguration('panocss', folderUri);
		const customDataInspect = allCssConfig.inspect<string[]>('customData');
		if (customDataInspect) {
			collect(customDataInspect.workspaceFolderValue, folderUri);
			if (i === 0) {
				if (workspace.workspaceFile) {
					collect(customDataInspect.workspaceValue, workspace.workspaceFile);
				}
				collect(customDataInspect.globalValue, folderUri);
			}
		}

	}

	return dataPaths;
}

function getCustomDataPathsFromAllExtensions(): string[] {
	const dataPaths: string[] = [];
	for (const extension of extensions.all) {
		const customData = extension.packageJSON?.contributes?.panocss?.customData;
		if (Array.isArray(customData)) {
			for (const rp of customData) {
				dataPaths.push(Utils.joinPath(extension.extensionUri, rp).toString());
			}
		}
	}
	return dataPaths;
}
