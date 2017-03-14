var path = require('path');
var webpack = require('webpack');
var options = {
    devtool: 'sourcemap'
}

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
        })
    ]
};