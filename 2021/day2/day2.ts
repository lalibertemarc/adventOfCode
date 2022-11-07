import { getPuzzleInput } from "../../mainHelpers";

interface Movement {
    direction: "forward" | "down" | "up";
    value: number;
}

interface Position {
    depth: number;
    horizontal: number;
    aim: number;
}

const inputs = getPuzzleInput("./2021/day2/input");
let allMovements: Movement[] = [];

inputs.forEach((input) => {
    let splitted = input.split(" ");
    allMovements.push({ direction: splitted[0] as "forward" | "down" | "up", value: +splitted[1] });
});

let positionCalculator: Position = { depth: 0, horizontal: 0, aim: 0 };

allMovements.forEach((movement) => {
    if (movement.direction == "down") {
        //positionCalculator.depth += movement.value;
        positionCalculator.aim += movement.value;
    } else if (movement.direction == "forward") {
        positionCalculator.horizontal += movement.value;
        positionCalculator.depth += positionCalculator.aim * movement.value;
    } else if (movement.direction == "up") {
        positionCalculator.aim -= movement.value;
        //positionCalculator.depth -= movement.value;
    } else {
        console.log(movement.direction);
    }
});

const answer = positionCalculator.depth * positionCalculator.horizontal;
console.log(answer);
