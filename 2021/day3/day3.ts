import { getPuzzleInput, bin2Dec } from "../../mainHelpers";

interface RatesScanner {
    gamma: string;
    epsilon: string;
}

interface Rates {
    gamma: number;
    epsilon: number;
}

const inputs = getPuzzleInput("./2021/day3/input");
const lengthOfBits = inputs[0].length;

let ratesScanner: RatesScanner = { gamma: "", epsilon: "" };
let rates: Rates = { gamma: 0, epsilon: 0 };

for (let i = 0; i < lengthOfBits; i++) {
    let numberOfZeros: number = 0;
    let numberOfOnes: number = 0;
    inputs.forEach((input) => {
        if (input.charAt(i) == "0") {
            numberOfZeros++;
        } else {
            numberOfOnes++;
        }
    });
    if (numberOfOnes > numberOfZeros) {
        ratesScanner.gamma += "1";
        ratesScanner.epsilon += "0";
    } else {
        ratesScanner.gamma += "0";
        ratesScanner.epsilon += "1";
    }
}

console.log(ratesScanner);

rates.epsilon = bin2Dec(ratesScanner.epsilon);
rates.gamma = bin2Dec(ratesScanner.gamma);
console.log(rates);
console.log('answer', rates.epsilon*rates.gamma)
