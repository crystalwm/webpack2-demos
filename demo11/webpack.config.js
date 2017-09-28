var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
var webpack = require('webpack');



module.exports = function(env) {
    return {
        entry: {
            main: './demo11/index.js',
            vender: './demo11/vender.js'
        },
        output: {
            filename: '[chunkhash].[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
            new HtmlWebpackPlugin({ template: './demo11/index.html' }),
            new InlineManifestWebpackPlugin({ name: 'webpackManifest' })
        ]
    }

}