var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');
var WebpackChunkHash = require('webpack-chunk-hash');




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
            new WebpackChunkHash({ algorithm: 'md5' }) // 'md5' is default value
        ]
    }

}