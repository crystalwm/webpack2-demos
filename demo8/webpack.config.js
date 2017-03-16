var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');



module.exports = function(env) {
    return {
        entry: {
            main: './index.js',
            vender: './vender.js'
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