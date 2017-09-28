var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = function(env) {
    return {
        entry: {
            main: './demo10/index.js',
            vender: './demo10/vender.js'
        },
        output: {
            filename: '[chunkhash].[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [new HtmlWebpackPlugin({ template: './demo10/index.html' })]
    }

}