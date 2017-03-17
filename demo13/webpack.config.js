var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackChunkHash = require('webpack-chunk-hash');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var webpack = require('webpack');



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
        module: {
            rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
            new ExtractTextPlugin("styles.css"),
            new HtmlWebpackPlugin({ template: './index.html' }),
            new WebpackChunkHash({ algorithm: 'md5' }), // 'md5' is default value
            new ChunkManifestPlugin({
                filename: "manifest.json",
                manifestVariable: "webpackManifest"
            })
        ]
    }
}