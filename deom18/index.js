var moment = require('moment');
require("./library/jqueryplugin/jqueryInputmaskBundle.js");

//console.log("typeof $.inputmask:" + typeof $.inputmask);

var b = document.getElementsByTagName('input')[0];
Inputmask("9-a{1,3}9{1,3}").mask(b);
console.log(moment().format());
console.log("timer\n");
console.log("timer2\n");