var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = function(env) {
    return {
        entry: {
            main: './demo4/index.js',
            vender: './demo4/vender.js'
        },
        output: {
            filename: '[chunkhash].[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            }]
        },
        plugins: [new ExtractTextPlugin('styles.css')]
    }

}