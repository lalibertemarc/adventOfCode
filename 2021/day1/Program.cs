using AoC1;

var numberOfTimeIncrease = 0;

for (var i = 1; i < PuzzleInput.Input.Length; i++)
{
    var current = PuzzleInput.Input[i];
    var oneBefore = PuzzleInput.Input[i - 1];
    if (current > oneBefore)
        numberOfTimeIncrease++;
}

Console.WriteLine(numberOfTimeIncrease);