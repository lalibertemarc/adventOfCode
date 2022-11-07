handlers = {
    F: {
        execute: (int1, int2) => {
            return lowerHalf(int1, int2);
        },
    },
    B: {
        execute: (int1, int2) => {
            return upperHalf(int1, int2);
        },
    },
    L: {
        execute: (int1, int2) => {
            return lowerHalf(int1, int2);
        },
    },
    R: {
        execute: (int1, int2) => {
            return upperHalf(int1, int2);
        },
    },
};

function lowerHalf(int1, int2) {
    var diff = int2 - int1;
    if (diff == 1) return { answer: int1 };
    return { down: int1, up: Math.floor(int2 - diff / 2) };
}

function upperHalf(int1, int2) {
    var diff = int2 - int1;
    if (diff == 1) return { answer: int2 };
    return { down: int1 + Math.ceil(diff / 2), up: int2 };
}

function formId(string) {
    let input = /((F|B){7})((R|L){3})/.exec(string);
    let rowInput = input[1].split("");
    let columnInput = input[3].split("");
    let start1 = { down: 0, up: 127 };
    let start2 = { down: 0, up: 7 };

    let output = { row: 0, column: 0, id: 0 };

    rowInput.forEach((element) => {
        start1 = handlers[element].execute(start1.down, start1.up);
    });
    output.row = start1.answer;

    columnInput.forEach((element) => {
        start2 = handlers[element].execute(start2.down, start2.up);
    });

    output.column = start2.answer;
    output.id = calculateId(output.row, output.column);
    return output;
}

function calculateId(row, column) {
    return row * 8 + column;
}

function sortById() {
    return function (a, b) {
        if (a.id > b.id) {
            return 1;
        } else if (a.id < b.id) {
            return -1;
        }
        return 0;
    };
}

module.exports = {
    handlers: handlers,
    formId: formId,
    calculateId: calculateId,
    sortById: sortById,
};
