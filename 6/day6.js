const { clear } = require("console");
var mainHelper = require("../mainHelpers.js");

fs = require("fs");

async function main() {
    compute(await mainHelper.readFileCombineMultiLine("./input"));
}

function compute(array) {
    getTotalOfAnsweredYes(array);
    getTotalWhereEveryoneAnsweredYes(array);
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

function getTotalWhereEveryoneAnsweredYes(array) {
    let answerCounter = [];
    array.forEach((input) => {
        let realInput = input.split(" ");
        realInput.pop();
        let firstWord = realInput[0];
        let charPresentsInAllStrings = "";
        for (let i = 0; i < firstWord.length; i++) {
            if (realInput.length == 1) {
                answerCounter.push(firstWord.length);
                break;
            }
            let currentChar = firstWord.charAt(i);
            let shouldPushAnswer = true;

            for (j = 1; j < realInput.length; j++) {
                if (!realInput[j].includes(currentChar)) {
                    shouldPushAnswer = false;
                }
            }
            if (shouldPushAnswer) charPresentsInAllStrings += currentChar;
        }
        answerCounter.push(charPresentsInAllStrings.length);
        charPresentsInAllStrings = "";
    });
    console.log(`The anwser is ${mainHelper.addUpArray(answerCounter)}`);
}

main();
