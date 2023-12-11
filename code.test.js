const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var graph = [
    [6,1,0,5],
    [2,7,6,3],
    [4,3,2,7],
    [7,8,6,3],
    [7,0,1,3],
    [1,7,5,8],
    [0,7,8,4],
    [6,3,1,4],
    [3,6,4,1]];
graphAnswers = ["[0]", "[0,6,7,3,8,4,1]", "[0,6,7,3,8,4,1,2]", "[0,6,7,3]", 
"[0,6,7,3,8,4]", "[0,5]", "[0,6]", "[0,6,7]", "[0,6,7,3,8]"]

for(jk = 0; jk < graphAnswers.length-1; jk++){
    assert(JSON.stringify(depthFirstSearch(JSON.parse(JSON.stringify(graph)), 0, jk)) == graphAnswers[jk]);
}