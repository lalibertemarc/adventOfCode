f = open("./input.txt", "r")
input = f.read().splitlines()


totalSum=0;

for i in input : 
    splitted = i.split('|')
    winningNumber = list(filter(None, splitted[0].split(' ')[2:]))
    myNumbers = list(filter(None, splitted[1].split(' ')))

    winnerNumbers = len(set(winningNumber) & set(myNumbers))
    
    if(winnerNumbers > 1): 
        howToIterate = winnerNumbers-1
        points = 1
        for i in range(0, howToIterate):
           points = points * 2
    elif (winnerNumbers == 1):
        points = 1
    else: 
        points = 0

    totalSum = totalSum + points
   

print(totalSum)
    