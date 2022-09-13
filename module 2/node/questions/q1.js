//make a folder in this directory


let fs  =  require("fs");
let path = require("path");
 

if(!fs.existsSync("filedir"))
  fs.mkdirSync("filedir");
 
let newtextfile = path.join(/Users/saurabh/Desktop/FJP6/module 2/node/questions,"filedir","newtxtfile.txt");
console.log(newtextfile);
