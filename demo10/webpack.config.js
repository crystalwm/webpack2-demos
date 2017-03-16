var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');



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
        plugins: [new HtmlWebpackPlugin({ template: './index.html' })]
    }

}