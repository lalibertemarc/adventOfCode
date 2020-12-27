fs = require("fs");
const helpers = require("./helpers.js");

function readInput() {
    fs.readFile("./input", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }
        let input = data.split("\r\n");
        compute(input);
    });
}

function compute(array) {
    var allIds = [];
    array.forEach((element) => {
        allIds.push(helpers.formId(element));
    });
    console.log(`The biggest id we have is ${getMaxId(allIds)}`);
    console.log(`The id of my seat is ${getMyId(allIds)}`);
}

function getMaxId(array) {
    var biggestId = 0;
    array.forEach((element) => {
        if (element.id > biggestId) biggestId = element.id;
    });
    return biggestId;
}

function getMyId(array) {
    array.sort(helpers.sortById());
    let startingId = 0;
    let missingSeatId = 0;
    array.forEach((element) => {
        if (startingId == 0) startingId = element.id;
        else if (startingId + 1 != element.id) {
            missingSeatId = startingId + 1;
        }
        startingId = element.id;
    });
    return missingSeatId;
}
readInput();
