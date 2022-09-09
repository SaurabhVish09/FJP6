let fs = require("fs");
//console.log(fs);
let path = require("path");
//C-create
let filepath = path.join(__dirname,"open.txt");
fs.writeFileSync(filepath,"my real name is saurabh");
//r-read
console.log("before uodate:");
let content = fs.readFileSync(filepath,'utf-8');
console.log(content);
//u-update
fs.appendFileSync(filepath,"\n newly added file");
console.log("after uodate:");
console.log(fs.readFileSync(filepath,'utf-8'));
//d-delete
fs.unlinkSync(filepath);
