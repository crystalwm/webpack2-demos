var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');



module.exports = function(env) {
    return {
        entry: {
            main: './demo6/index.js',
            vender: './demo6/vender.js'
        },
        output: {
            filename: '[chunkhash].[name].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/client/'
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