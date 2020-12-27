var mainHelper = require("../mainHelpers.js");

fs = require("fs");

async function main() {
    compute(await mainHelper.readFileCombineMultiLine("./input"));
}

function compute(array) {
    getTotalOfAnsweredYes(array);
}

function getTotalOfAnsweredYes(array) {
    let answerCounter = [];

    array.forEach((input) => {
        let counter = "";
        for (let i = 0; i < input.length; i++) {
            if (input[i] === " ") continue;
            if (!counter.includes(input[i])) counter += input[i];
        }
        answerCounter.push(counter.length);
    });

    console.log(`The answer is ${mainHelper.addUpArray(answerCounter)}`);
}

main();
