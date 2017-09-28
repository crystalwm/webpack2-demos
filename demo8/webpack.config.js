var path = require('path');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');



module.exports = function(env) {
    return {
        entry: {
            main: './demo8/index.js',
            vender: './demo8/vender.js'
        },
        output: {
            filename: '[chunkhash].[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new ChunkManifestPlugin({
                filename: "manifest.json",
                manifestVariable: "webpackManifest"
            })
        ]
    }

}