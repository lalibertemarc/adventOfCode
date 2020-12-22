fs = require("fs");

const minMaxRegEx = /\d*-\d*/;
const targetRegEx = /\D:/;
const passRegex = /: .*/;

function readInput() {
    fs.readFile("./input", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }

        var input = data.split("\r\n");
        compute(input);
    });
}

function compute(array) {
    let howManyPasswordAreValids = 0;

    for (var i = 0; i < array.length; i++) {
        var password = formPassword(array[i]);

        if (isPasswordValid2(password)) howManyPasswordAreValids++;
    }
    console.log(`We have ${howManyPasswordAreValids} valid passwords`);
}

function formPassword(string) {
    let minMax = minMaxRegEx.exec(string)[0].split("-");
    let target = targetRegEx.exec(string)[0].replace(":", "");
    let actualPassword = passRegex.exec(string)[0].replace(": ", "").split("");
    return {
        min: minMax[0],
        max: minMax[1],
        target: target,
        actualPassword: actualPassword,
    };
}

function isPasswordValid1(password) {
    var howManyOfTargetChar = getOccurrence(
        password.actualPassword,
        password.target
    );
    return (
        howManyOfTargetChar >= password.min &&
        howManyOfTargetChar <= password.max
    );
}

function isPasswordValid2(password) {
    if (password.actualPassword[password.min - 1] === password.target) {
        if (password.actualPassword[password.max - 1] !== password.target)
            return true;
    } else if (password.actualPassword[password.max - 1] === password.target) {
        if (password.actualPassword[password.min - 1] !== password.target)
            return true;
    }
    return false;
}

function getOccurrence(array, value) {
    return array.filter((v) => v === value).length;
}

readInput();
