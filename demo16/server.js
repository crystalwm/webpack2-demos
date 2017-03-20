"use strict";

const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config");
var _ = require('underscore-contrib');
var config = webpackConfig();

_.map(config.entry, function(value, key) {

    config.entry[key].unshift('webpack/hot/dev-server');
    config.entry[key].unshift('webpack-dev-server/client?http://127.0.0.1:9000/');

});
config.plugins = (config.plugins || []).concat([
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new Webpack.HotModuleReplacementPlugin(),
]);

const compiler = Webpack(config);
const server = new WebpackDevServer(compiler, {
    stats: {
        colors: true
    },
    compress: true,
    historyApiFallback: true
});

server.listen(9000, "127.0.0.1", function() {
    console.log("Starting server on http://localhost:9000");
});