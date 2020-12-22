fs = require("fs");
const birthYearRegex = /byr:\d*/;
const issueYearRegex = /iyr:\d*/;
const expirationYearRegex = /eyr:\d*/;
const heightRegex = /hgt:\d*cm|in/;
const hairColorRegex = /hcl:.*#/;
const eyeColorRegex = /ecl:[a-z]*/;
const passportIdRegex = /pid:\d*/;
const countryIdRegex = /cid:\d*/;

const validationRules = [
    { regex: birthYearRegex, replacer: "byr:", name: "Birth year" },
    { regex: issueYearRegex, replacer: "iyr:", name: "Issue year" },
    { regex: expirationYearRegex, replacer: "eyr:", name: "Expiration year" },
    { regex: heightRegex, replacer: "hgt:", name: "Height" },
    { regex: hairColorRegex, replacer: "hcl:#", name: "Hair Color" },
    { regex: eyeColorRegex, replacer: "ecl:", name: "Eye color" },
    { regex: passportIdRegex, replacer: "pid:", name: "Passport Id" },
    { regex: countryIdRegex, replacer: "cid:", name: "Country Id" },
];

function readInput() {
    fs.readFile("./input", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }
        var main = [];
        var input = data.split("\r\n");
        var passPort = "";

        input.forEach((element) => {
            if (element != "") {
                passPort += `${element} `;
            } else {
                main.push(passPort);
                passPort = "";
            }
        });
        main.push(passPort);
        passPort = "";
        compute(main);
    });
}

function compute(array) {
    let numberOfValidPassports = 0;

    array.forEach((element) => {
        if (isPassportValid(element)) numberOfValidPassports++;
    });
    console.log(`We have ${numberOfValidPassports} valid passports`);
}

function isPassportValid(string) {
    var presentFields = [];
    validationRules.forEach((rule) => {
        if (isFieldPresent(string, rule)) presentFields.push(rule.name);
    });

    if (presentFields.length == validationRules.length) return true;
    else if (
        presentFields.length == validationRules.length - 1 &&
        !presentFields.includes("Country Id")
    ) {
        return true;
    }

    console.log(`${string} is invalid`);
    console.log(presentFields);
    return false;
}

function isFieldPresent(string, rule) {
    let field = rule.regex.exec(string);
    if (field == null) {
        return false;
    } else {
        field = field[0].replace(rule.replacer, "");
        return field != string.empty;
    }
}

readInput();
