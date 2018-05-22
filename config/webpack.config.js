var path = require('path');

module.exports = {
    entry: './index.js',
    context: path.resolve(__dirname,'../demo1'),
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'../dist')
    }
};