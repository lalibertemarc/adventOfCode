fs = require("fs");
const helpers = require("./helpers.js");

function readInput() {
    fs.readFile("./input", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }
        let main = [];
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
    if (allIds.includes({ row: 97, column: 0, id: 776 })) console.log("yes!!");
    getMyId(allIds);
}

function getMaxId(array) {
    var biggestId = 0;
    array.forEach((element) => {
        if (element.id > biggestId) biggestId = element.id;
    });
    return biggestId;
}

function getMyId(array) {
    let missingSeats = [];
    for (let i = 0; i < 127; i++) {
        for (let j = 0; j < 8; j++) {
            if (!array.some((e) => e.row === i && e.column === j)) {
                missingSeats.push({
                    row: i,
                    column: j,
                    id: helpers.calculateId(i, j),
                });
            }
        }
    }
    console.log(missingSeats);
}
readInput();
