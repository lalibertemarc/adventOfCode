fs = require("fs");

const validationRules = [
    {
        regex: /byr:\d*/,
        replacer: "byr:",
        name: "Birth year",
        digits: 4,
        min: 1920,
        max: 2002,
    },
    {
        regex: /iyr:\d*/,
        replacer: "iyr:",
        name: "Issue year",
        digits: 4,
        min: 2010,
        max: 2020,
    },
    {
        regex: /eyr:\d*/,
        replacer: "eyr:",
        name: "Expiration year",
        digits: 4,
        min: 2020,
        max: 2030,
    },
    {
        regex: /hgt:(\d*)(cm|in)/,
        replacer: "hgt:",
        name: "Height",
        cm: { min: 150, max: 193 },
        in: { min: 59, max: 76 },
    },
    {
        regex: /hcl:#([0-9a-f]{6})/,
        replacer: "hcl:#",
        name: "Hair Color",
        digits: 6,
    },
    { regex: /ecl:[a-z]*/, replacer: "ecl:", name: "Eye color" },
    { regex: /pid:\d*/, replacer: "pid:", name: "Passport Id", digits: 9 },
    { regex: /cid:\d*/, replacer: "cid:", name: "Country Id" },
];

const allowedEyeColor = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

function readInput() {
    fs.readFile("./input", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }
        let main = [];
        let input = data.split("\r\n");
        let passPort = "";

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
        if (isPassportValid2(element)) numberOfValidPassports++;
    });

    console.log(`We have ${numberOfValidPassports} valid passports`);
}

function isPassportValid2(string) {
    let presentFields = [];
    validationRules.forEach((rule) => {
        switch (rule.name) {
            case "Birth year":
            case "Issue year":
            case "Expiration year":
                if (isNumericValid(string, rule)) presentFields.push(rule.name);
                break;
            case "Eye color":
                if (isEyeColorValid(string, rule)) presentFields.push(rule.name);
                break;
            case "Hair Color":
            case "Passport Id":
                if (isStringValid(string, rule)) presentFields.push(rule.name);
                break;
            case "Country Id":
                if (isFieldPresent(string, rule)) presentFields.push(rule.name);
                break;
            case "Height":
                if (isHeightValid(string, rule)) presentFields.push(rule.name);
                break;
        }
    });

    if (
        presentFields.length == validationRules.length ||
        (presentFields.length == validationRules.length - 1 &&
            !presentFields.includes("Country Id"))
    )
        return true;

    return false;
}

function isHeightValid(string, rule) {
    let field = rule.regex.exec(string);
    if (field == null) {
        return false;
    } else {
        let value = field[1];
        let unit = field[2];
        return value >= rule[unit].min && value <= rule[unit].max;
    }
}

function isNumericValid(string, rule) {
    let field = rule.regex.exec(string);
    if (field == null) {
        return false;
    } else {
        field = field[0].replace(rule.replacer, "");
        if (field.length == rule.digits) {
            field = parseInt(field);
            return field >= rule.min && field <= rule.max;
        }
        return false;
    }
}

function isStringValid(string, rule) {
    let field = rule.regex.exec(string);
    if (field == null) {
        return false;
    } else {
        field = field[0].replace(rule.replacer, "");
        return field.length == rule.digits;
    }
}

function isEyeColorValid(string, rule) {
    let field = rule.regex.exec(string);
    if (field == null) {
        return false;
    } else {
        field = field[0].replace(rule.replacer, "");
        return allowedEyeColor.includes(field);
    }
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

function isPassportValid1(string) {
    let presentFields = [];
    validationRules.forEach((rule) => {
        if (isFieldPresent(string, rule)) presentFields.push(rule.name);
    });

    if (
        presentFields.length == validationRules.length ||
        (presentFields.length == validationRules.length - 1 &&
            !presentFields.includes("Country Id"))
    )
        return true;

    return false;
}

readInput();
