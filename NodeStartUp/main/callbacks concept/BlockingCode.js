/**
 * Created by Arron on 2016/11/1.
 */
//the program blocks until it reads the file 
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program Ended");
