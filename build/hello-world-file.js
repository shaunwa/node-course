"use strict";

var fs = require('fs');

var args = process.argv.slice(2);
var name = args[0];
fs.writeFile('hello.txt', "Hello ".concat(name, "!"), function (err) {
  console.log('Done!');
});