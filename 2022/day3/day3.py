import string

f = open("./input", "r")
input = f.read().splitlines()

points = list(string.ascii_lowercase)
points +=list(string.ascii_uppercase)

def getbothstring(value):
    firstString = ''
    secondString = ''
    for i in range(0,len(value)):
        if i <= len(value)//2-1:
            firstString = firstString + value[i]
        else:
            secondString = secondString + value[i]
    return firstString, secondString


def stringIntersection(string1, string2):
    value = set(string1) & set(string2) 
    return list(value)[0]

def stringTripleIntersection(string1, string2, string3):
    value = set(string1) & set(string2) & set(string3) 
    return list(value)[0]

def getPriority(char):
    return points.index(char)+1

totalPriority = 0
sacks = []
for i in input:
    sacks.append(i)
    if(len(sacks) == 3):
        intersection = stringTripleIntersection(sacks[0], sacks[1], sacks[2])
        print('intersection', intersection)
        priority = getPriority(char=intersection)
        totalPriority += priority
        sacks = []

print('totalPriority', totalPriority)