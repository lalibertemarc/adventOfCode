const { count } = require("console");

fs = require("fs");

function readInput() {
    fs.readFile("./input", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }
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
        answer = "";
        compute(main);
    });
}

function compute(array) {
    let answerCounter = [];

    array.forEach((input) => {
        let counter = "";
        for (let i = 0; i < input.length; i++) {
            if (input[i] === " ") continue;
            if (!counter.includes(input[i])) counter += input[i];
        }
        answerCounter.push(counter.length);
    });
    let answer = 0;
    answerCounter.forEach((element) => {
        answer += element;
    });
    console.log(`The answer is ${answer}`);
}

readInput();
