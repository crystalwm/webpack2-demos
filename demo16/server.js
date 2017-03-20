"use strict";

const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config");

const compiler = Webpack(webpackConfig());
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