var path = require('path');

module.exports = {
    entry: './demo1/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};