let input;
let main = [];

fs = require("fs");

function readInput() {
    fs.readFile("./input", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }

        input = data.split("\r\n");
        input.forEach((element) => {
            main.push(parseInt(element));
        });
        //find2020With2Entries(main);
        find2020With3Entries(main);
    });
}

input = readInput();

function find2020With2Entries(array) {
    let output = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == 2020) {
                console.log(
                    `${array[i]} + ${array[j]} = ${array[i] + array[j]}`
                );
                output = [array[i], array[j]];
                break;
            }
        }
    }
    output.length == 0 ? console.log("not found") : console.log("found");
    console.log(`Answer is : ${output[0] * output[1]}`);
}

function find2020With3Entries(array) {
    let output = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            for (var k = j + 1; k < array.length; k++) {
                if (array[i] + array[j] + array[k] == 2020) {
                    console.log(
                        `${array[i]} + ${array[j]} + ${array[k]} = ${
                            array[i] + array[j] + array[k]
                        }`
                    );
                    output = [array[i], array[j], array[k]];
                    break;
                }
            }
        }
    }
    output.length == 0 ? console.log("not found") : console.log("found");
    console.log(`Answer is : ${output[0] * output[1] * output[2]}`);
}
