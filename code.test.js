const fs = require('fs');

eval(fs.readFileSync('code.js')+'');

var a = [
    [6,1,0,5],
    [2,7,6,3],
    [4,3,2,7],
    [7,8,6,3],
    [7,0,1,3],
    [1,7,5,8],
    [0,7,8,4],
    [6,3,1,4],
    [3,6,4,1]];
a = JSON.stringify(a) 

var a1 = JSON.parse(a);
var a2 = JSON.parse(a);
var a3 = JSON.parse(a);
var a4 = JSON.parse(a);
var a5 = JSON.parse(a);
var a6 = JSON.parse(a);
var a7 = JSON.parse(a);
var a8 = JSON.parse(a);
var a9 = JSON.parse(a);

console.log(JSON.stringify(depthFirstSearch(a1, 0, 0)) == "[0]");
console.log(JSON.stringify(depthFirstSearch(a2, 0, 1)) == "[0,6,7,3,8,4,1]");
console.log(JSON.stringify(depthFirstSearch(a3, 0, 2)) == "[0,6,7,3,8,4,1,2]");
console.log(JSON.stringify(depthFirstSearch(a4, 0, 3)) == "[0,6,7,3]");
console.log(JSON.stringify(depthFirstSearch(a5, 0, 4)) == "[0,6,7,3,8,4]");
console.log(JSON.stringify(depthFirstSearch(a6, 0, 5)) == "[0,5]");
console.log(JSON.stringify(depthFirstSearch(a7, 0, 6)) == "[0,6]");
console.log(JSON.stringify(depthFirstSearch(a8, 0, 7)) == "[0,6,7]");
console.log(JSON.stringify(depthFirstSearch(a9, 0, 8)) == "[0,6,7,3,8]");
