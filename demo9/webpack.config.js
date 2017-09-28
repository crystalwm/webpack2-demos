var path = require('path');
var WebpackChunkHash = require('webpack-chunk-hash');




module.exports = function(env) {
    return {
        entry: {
            main: './demo9/index.js',
            vender: './demo9/vender.js'
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