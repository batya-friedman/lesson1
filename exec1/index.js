'use strict';

console.log("hello node");

const slicer = require('./slicer');
console.log(process.argv);
const d = process.argv[2];
const func = process.argv[3];

function sendFunction(d, func) {
    if (func === "stripes")
        slicer.stripes(d);
    else
        if(func === "stars")
            slicer.stars(d);
        else
            if(func === "cubes")
                slicer.cubes(d);
                else
                    console.log("Error: Cutting shape does not exist!");
}

sendFunction(d, func);