fs = require("fs");

function readInput() {
    fs.readFile("./input", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }
        var main = [];
        var input = data.split("\r\n");
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

let slope1 = { i: 1, j: 1 };
let slope2 = { i: 1, j: 3 };
let slope3 = { i: 1, j: 5 };
let slope4 = { i: 1, j: 7 };
let slope5 = { i: 2, j: 1 };

let slopes = [slope1, slope2, slope3, slope4, slope5];

function compute(array) {
    let output = [];
    let k = 0;
    slopes.forEach((slope) => {
        while (i < array.length) {
            if (array[i][j] == "#") {
                treesEncountered++;
            }
            adjustCoords(array[0], slope);
        }
        console.log(`For Slope ${++k}, we have ${treesEncountered} trees`);
        output.push(treesEncountered);
        initValues();
    });
    let Answer = 1;
    output.forEach((element) => (Answer *= element));
    console.log(`The Answer is ${Answer}`);
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
