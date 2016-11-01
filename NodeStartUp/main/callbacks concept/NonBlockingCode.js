/**
 * Created by Arron on 2016/11/1.
 */

//once file I/O is complete, it will call the callback function while
// passing the callback function ,the content of the file as a parameter
var fs = require("fs");
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString())
});
console.log("Program Ended");
