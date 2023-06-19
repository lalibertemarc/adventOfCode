f = open("./input", "r")
input = f.read().splitlines()

class Ops():
    def __init__(self, cycleToExecute, valueToExecute):
        self.cycleToExecute = cycleToExecute
        self.valueToExecute = valueToExecute


allValues = []
opsCounter =1
x=1
allOps = []

for command in input:
    # print(input[i])
    print('opsCounter', opsCounter)
    didExecute = False
    if(opsCounter==20 or opsCounter == 60 or opsCounter == 100 or opsCounter == 140 or opsCounter == 180 or opsCounter == 220):
        print('value of x', x, 'opsCounter', opsCounter)
        value = opsCounter*x
        allValues.append((opsCounter, value))

    opsToExecute = [op for op in allOps if op.cycleToExecute == opsCounter]
    if(len(opsToExecute) > 0):
        opsToExecute = opsToExecute[0]
        print('excuting', opsToExecute.valueToExecute, 'on ops', opsCounter)
        x += int(opsToExecute.valueToExecute);
        opsCounter+=1


    if(opsCounter==20 or opsCounter == 60 or opsCounter == 100 or opsCounter == 140 or opsCounter == 180 or opsCounter == 220):
        print('value of x', x, 'opsCounter', opsCounter)
        value = opsCounter*x
        toAdd = (opsCounter, value)
        if toAdd not in allValues:
            allValues.append(toAdd)

    command = command.split(' ')
    if (command[0] == 'addx'):
        allOps.append(Ops(opsCounter+1, int(command[1])))

    opsCounter+=1

sum=0
for value in allValues:
    print(value[0], value[1])
    sum+=value[1];

print(sum)