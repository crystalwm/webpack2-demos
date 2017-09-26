var path = require('path');
var webpack = require('webpack');
var options = {
    devtool: 'sourcemap'
};
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './demo2/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        /*         new webpack.optimize.UglifyJsPlugin({
                    sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
                }) */
        new UglifyJSPlugin({
            sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
        })
    ]
};