<div align="center">
  <img src="icon.png" alt="" />
</div>

<h2 align="center">This VS Code extension provides support for Panorama's subset of CSS3.</h2>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=braemie.panorama-css">
    <img src="https://vsmarketplacebadges.dev/version-short/braemie.panorama-css.png" style="display: inline-block" />
  </a>

  <a href="https://marketplace.visualstudio.com/items?itemName=braemie.panorama-css" style="margin-left:10px">
    <img src="https://vsmarketplacebadges.dev/installs/braemie.panorama-css.png" style="display: inline-block" />
  </a>

  <a href="https://gitlicense.com/license/braem/vscode-panorama-css" style="margin-left:10px">
    <img src="https://gitlicense.com/badge/braem/vscode-panorama-css" style="display: inline-block" />
  </a>

  <a href="https://ko-fi.com/braemie" title="Buy me a ko-fi ;p" style="margin-left:10px">
    <img src="https://img.shields.io/badge/Donate-$1-purple?logo=ko-fi&style=flat" alt="Buy me a ko-fi" style="display: inline-block" />
  </a>
</p>

[Panorama](https://developer.valvesoftware.com/wiki/Panorama) is UI framework developed and used by Valve Software used for many source games including CS:GO, Dota 2, and Chaos Engine games. For CS:GO's Panorama CSS documentation, see the [VDC page](https://developer.valvesoftware.com/wiki/CSGO_Panorama_CSS_Properties).


## Disclaimer
Nearly all of the client/server code here is directly carried over from vscode's built-in css extension [css-language-features](https://github.com/microsoft/vscode/tree/main/extensions/css-language-features) in order to connect to a forked version of [vscode-css-languageservice](https://github.com/microsoft/vscode-css-languageservice).

## Important Caveat

> This extension removes coloring, autocompletion, validation, etc. for non-Panorama properties for both CSS and SCSS. Make sure to **enable it per-workspace!**

## Features

- SCSS support for Chaos Engine
- Coloring for CS:GO and Chaos Panorama panel names, properties, psuedo-selectors, etc.
- Code completion and validation
- Snippets for easy gradient creation
