//"/Users/saurabh/Desktop/FJP6/module 2/node/path.js"
let path = require("path");
//console.log(path);
//let extensionname = path.extname("/Users/saurabh/Desktop/FJP6/module 1/selector.html")
//console.log(extensionname);
let file  = path.basename(__filename);
console.log(file);
console.log(__dirname);
console.log(__filename);
let dirpath = __dirname;
console.log(dirpath);
let mynewpath = path.join(dirpath,"test.js");
console.log(mynewpath);