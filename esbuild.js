const path = require('path')

let entryPlugin = {
    name: 'entry',
    setup(build) {
        build.onResolve({ filter: /^(client|server)\.ts$/ }, args => {
            return {
                path: args.path,
                namespace: 'entry-ns'
            }
        })
        build.onLoad({ filter: /.*/, namespace: 'entry-ns' }, args => {
            let contents = ''
            if (args.path === 'client.ts') {
                contents = `
                    import {activate} from './client/node/cssClientMain.ts'
                    export {activate}
                `
            } else if (args.path === 'server.ts') {
                contents = `
                    require('./server/node/cssServerMain.ts')
                `
            } else {
                throw new Error('Bad path')
            }
            return {
                contents,
                resolveDir: __dirname
            }
        })
    }
}

async function start() {
    await require('esbuild').build({
        entryPoints: ['client.ts', 'server.ts'],
        define: { 'process.env.NODE_ENV': JSON.stringify('production') },
        bundle: true,
        platform: 'node',
        target: 'node12.16',
        mainFields: ['module', 'main'],
        minify: true,
        sourcemap: true,
        external: ['vscode'],
        outdir: path.resolve(__dirname, 'out'),
        plugins: [entryPlugin]
    })
}

start().catch(e => {
    console.error(e)
})
