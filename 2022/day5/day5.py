f = open("./input", "r")
input = f.read().splitlines()

stack1 = ['S', 'M', 'R', 'N', 'W', 'J', 'V', 'T']
stack2 = ['B', 'W', 'D', 'J', 'Q', 'P', 'C', 'V']
stack3 = ['B', 'J', 'F', 'H', 'D', 'R', 'P']
stack4 = ['F', 'R', 'P', 'B', 'M', 'N', 'D']
stack5 = ['H', 'V', 'R', 'P', 'T', 'B' ]
stack6 = ['C', 'B', 'P', 'T' ]
stack7 = ['B', 'J', 'R', 'P' , 'L']
stack8 = ['N', 'C', 'S', 'L', 'T', 'Z', 'B', 'W']
stack9 = ['L', 'S', 'G' ]

allStacks = [[], stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9]

def getNumbers(string):
    return [int(s) for s in string.split() if s.isdigit()]

def moveCrateOneByOne(quantity, fromStack, toStack):
    for _ in range(0, quantity):
        crate = fromStack.pop();
        toStack.append(crate)

def moveCrateInOrder(quantity, fromStack, toStack):
    cratesToMove = []
    for _ in range(0, quantity):
        crate = fromStack.pop();
        cratesToMove.append(crate)
    cratesToMove.reverse()
    toStack += cratesToMove

for i in range(10, len(input)):
    numbers = getNumbers(input[i])
    quantity = numbers[0]
    source = numbers[1]
    destination = numbers[2]
    moveCrateInOrder(quantity, allStacks[source], allStacks[destination])


answer = ''
for stack in allStacks:
    if(len(stack)>0):
       answer += stack[-1]

print(answer)