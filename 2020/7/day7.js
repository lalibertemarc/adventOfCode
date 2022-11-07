var mainHelper = require("../mainHelpers.js");

async function main() {
    compute(await mainHelper.readFileSplitByLineString("./input"));
}

function compute(array) {
    targetBags = getBagsThatContainsRegex(array, new RegExp(`shiny gold bag`));
    targetBags = consolidateArray(targetBags);
    targetBags = getBagsThatContainsArray(array, targetBags);
    console.log(targetBags.length);
    targetBags = getBagsThatContainsArray(array, targetBags);
    console.log(targetBags.length);
    targetBags = getBagsThatContainsArray(array, targetBags);
    console.log(targetBags.length);
    targetBags = getBagsThatContainsArray(array, targetBags);
    console.log(targetBags.length);
    targetBags = getBagsThatContainsArray(array, targetBags);
    console.log(targetBags.length);
    targetBags = getBagsThatContainsArray(array, targetBags);
    console.log(targetBags.length);
    targetBags = getBagsThatContainsArray(array, targetBags);
    console.log(targetBags.length);
    targetBags = getBagsThatContainsArray(array, targetBags);
    console.log(targetBags.length);
    targetBags = getBagsThatContainsArray(array, targetBags);
    console.log(targetBags.length);
    targetBags = getBagsThatContainsArray(array, targetBags);
    console.log(targetBags.length);
    targetBags = getBagsThatContainsArray(array, targetBags);
}

function getBagsThatContainsArray(array, input) {
    let output = [];
    input.forEach((element) => {
        output.push(
            getBagsThatContainsRegex(array, new RegExp(`${element} bag`))
        );
    });
    return consolidateArray(output);
}

function getBagsThatContainsRegex(array, regex) {
    let ouput = [];
    let containerRegex = /([a-zA-Z]*\s[a-zA-Z]*) bags/;
    array.forEach((element) => {
        let match = regex.exec(element);
        if (match != null) {
            let match2 = containerRegex.exec(element);
            ouput.push(match2[1]);
        }
    });
    return ouput;
}

function consolidateArray(array) {
    let output = [];
    array.forEach((element) => {
        if (Array.isArray(element)) {
            element.forEach((type) => {
                if (!output.includes(type)) output.push(type);
            });
        } else {
            output.push(element);
        }
    });
    return output;
}

main();
