import re

f = open("./input.txt", "r")
input = f.read().splitlines()

gameIdPatterd = 'Game (\d*)'
redPattern =  '(\d*) red'
greenPattern = '(\d*) green'
bluePattern = '(\d*) blue'

totalCubes = {
    "red" : 12,
    "green" : 13,
    "blue" : 14,
}

totalSum=0

i=1;
for i in input:
    gameIdMatch = re.findall(gameIdPatterd, i)
    gameId = int(gameIdMatch[0])

    redMatch = re.findall(redPattern, i)
    redMatch = [int(x) for x in redMatch]
    maxRed = max(redMatch)
    
    greenMatch = re.findall(greenPattern, i)
    greenMatch = [int(x) for x in greenMatch]
    maxGreen = max(greenMatch)

    blueMatch = re.findall(bluePattern, i)
    blueMatch = [int(x) for x in blueMatch]
    maxBlue = max(blueMatch)
    print(maxRed, maxGreen, maxBlue)
    myPower = maxRed * maxGreen * maxBlue


    totalSum = totalSum + myPower;

    
 
print(totalSum)

