var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");



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
            new ExtractTextPlugin("styles.css")
        ]
    }
}