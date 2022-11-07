import * as fs from "fs";

function readFilePath(path: string): string | undefined {
    try {
        return fs.readFileSync(path, "utf8");
    } catch (e) {
        console.error(e);
    }
}

export function getPuzzleInput(path: string): string[] {
    const data = readFilePath(path);
    const main: string[] = [];
    if (data) {
        let input = data.split("\r\n");
        input.forEach((element) => {
            main.push(element);
        });
    }
    return main;
}

export function bin2Dec(input: string): number {
    let somme = 0;
    let i = input.length - 1;
    let j = 0;
    while (j <= input.length) {
        if (input.charAt(i) == "1") {
            somme += Math.pow(2, j);
        }
        j++;
        i--;
    }
    return somme;
}
