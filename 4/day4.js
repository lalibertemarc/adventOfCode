fs = require("fs");

const validationRules = [
    { regex: /byr:\d*/, replacer: "byr:", name: "Birth year" },
    { regex: /iyr:\d*/, replacer: "iyr:", name: "Issue year" },
    { regex: /eyr:\d*/, replacer: "eyr:", name: "Expiration year" },
    { regex: /hgt:\d*/, replacer: "hgt:", name: "Height" },
    { regex: /hcl:.*/, replacer: "hcl:#", name: "Hair Color" },
    { regex: /ecl:[a-z]*/, replacer: "ecl:", name: "Eye color" },
    { regex: /pid:\d*/, replacer: "pid:", name: "Passport Id" },
    { regex: /cid:\d*/, replacer: "cid:", name: "Country Id" },
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

    if (
        presentFields.length == validationRules.length ||
        (presentFields.length == validationRules.length - 1 &&
            !presentFields.includes("Country Id"))
    )
        return true;

    // console.log(`${string} is invalid`);
    // console.log(presentFields);
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
