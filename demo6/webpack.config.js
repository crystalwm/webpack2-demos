var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');



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
            new ManifestPlugin({
                fileName: 'my-manifest.json',
                publicPath: '/client/',
                stripSrc: 'in',
                cache: {}
            })
        ]
    }

}