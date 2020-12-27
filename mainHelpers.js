fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);

async function readFilePath(path) {
    try {
        return await readFile(path, "utf8");
    } catch (e) {
        console.error(e);
    }
}

async function readFileSplitByLine(path) {
    let data = await readFilePath(path);
    let main = [];
    let input = data.split("\r\n");
    input.forEach((element) => {
        main.push(parseInt(element));
    });

    return main;
}

async function readFileCombineMultiLine(path) {
    let data = await readFilePath(path);
    let main = [];
    let input = data.split("\r\n");
    let answer = "";

    input.forEach((element) => {
        if (element != "") {
            answer += `${element} `;
        } else {
            main.push(answer);
            answer = "";
        }
    });
    main.push(answer);
    return main;
}

function addUpArray(array) {
    let answer = 0;
    array.forEach((element) => {
        answer += element;
    });
    return answer;
}

function multiplyUpArray(array) {
    let answer = 1;
    array.forEach((element) => (answer *= element));
    return answer;
}

module.exports = {
    readFileSplitByLine: readFileSplitByLine,
    readFileCombineMultiLine: readFileCombineMultiLine,
    addUpArray: addUpArray,
    multiplyUpArray: multiplyUpArray,
};
