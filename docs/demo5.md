##style-loader的引用计数





## webpack
```
var path = require('path');


module.exports = function(env) {
    return {
        entry: {
            main: './index.js',
            vender: './vender.js'
        },
        output: {
            filename: '[chunkhash].[name].js',
            path: path.resolve(__dirname, 'dist')
        }
    }

}
```


### vender.js 中引入css不起作用

```
var style = require("style-loader/useable!css-loader!./style.css");
```

### vender.js 中引入css起作用

```
var style = require("style-loader/useable!css-loader!./style.css");
style.use();
```



