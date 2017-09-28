var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function(env) {
    return {
        devServer: { contentBase: path.join(__dirname, "dist"), compress: true, port: 9000 },
        entry: {
            main: './demo14/index.js',
            vender: './demo14/vender.js'
        },
        output: {
            filename: '[chunkhash].[name].js',
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
        plugins: [
            new ExtractTextPlugin('styles.css'),
            new HtmlWebpackPlugin({ template: './demo14/index.html' })
        ]
    }

}