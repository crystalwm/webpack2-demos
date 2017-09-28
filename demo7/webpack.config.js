var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin({
    path: path.join(__dirname, 'manifest'),
    prettyPrint: true,
    processOutput: function(assets) { return 'window.staticMap = ' + JSON.stringify(assets) },
    metadata: { version: 123 }
});



module.exports = function(env) {
    return {
        entry: {
            main: './demo7/index.js',
            vender: './demo7/vender.js'
        },
        output: {
            filename: '[chunkhash].[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [assetsPluginInstance]
    }

}