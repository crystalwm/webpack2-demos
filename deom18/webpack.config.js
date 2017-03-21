var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');



module.exports = function(env) {
    return {
        devtool: "cheap-eval-source-map",
        devServer: {
            proxy: {
                "/api": "http://127.0.0.1:50545",
            }
        },
        entry: {
            main: ['./index.js'],
            vender: ['./vender.js']
        },
        output: {
            filename: '[hash].[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader?sourceMap'
                })
            }]
        },
        resolve: {
            alias: {
                jquery: path.resolve(__dirname, "./library/jquery-3.2.0.js")
            }
        },
        plugins: [
            new ExtractTextPlugin('styles.css'),
            new HtmlWebpackPlugin({ template: './index.html' }),
            new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' })
        ]
    }
}