fs = require("fs");
var mainHelper = require("../mainHelpers.js");

function readInput() {
    fs.readFile("./input", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }
        let main = [];
        let input = data.split("\r\n");
        input.forEach((element) => {
            main.push(element.split(""));
        });
        compute(main);
    });
}

let i = 0;
let j = 0;
let jCounter = 0;
let treesEncountered = 0;

const slope1 = { i: 1, j: 1 };
const slope2 = { i: 1, j: 3 };
const slope3 = { i: 1, j: 5 };
const slope4 = { i: 1, j: 7 };
const slope5 = { i: 2, j: 1 };

const slopes = [slope1, slope2, slope3, slope4, slope5];

function compute(array) {
    let output = [];
    let k = 0;
    slopes.forEach((slope) => {
        while (i < array.length) {
            if (array[i][j] == "#") treesEncountered++;
            adjustCoords(array[0], slope);
        }
        console.log(`For Slope ${++k}, we have ${treesEncountered} trees`);
        output.push(treesEncountered);
        initValues();
    });

    console.log(`The Answer is ${mainHelper.multiplyUpArray(output)}`);
}

function initValues() {
    i = 0;
    j = 0;
    jCounter = 0;
    treesEncountered = 0;
}

function adjustCoords(array, slope) {
    jCounter += slope.j;
    j = jCounter % array.length;
    i += slope.i;
}

readInput();
