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
    res = ""
    for i in string1:
        if i in string2 and not i in res:
            res += i
    return res

def getPriority(char):
    return points.index(char)+1

totalPriority = 0
for i in input:
    splitted = getbothstring(value=i)
    firstSack = splitted[0]
    secondSack = splitted[1]
    intersection = stringIntersection(firstSack, secondSack)
    print('intersection', intersection)
    priority = getPriority(char=intersection)
    print('priority', priority)
    totalPriority += priority

print('totalPriority', totalPriority)