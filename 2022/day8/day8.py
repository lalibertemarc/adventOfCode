f = open("./input", "r")
input = f.read().splitlines()

table = []

for line in input:
    newRow = []
    for c in line:
        newRow.append(c)
    table.append(newRow)

#print(table)
visibleTrees = 0;

for row in range(0, len(table)):
    for column in range(0, len(table[row])):
        if(row == 0 or row == len(table)-1):
            visibleTrees+=1
            continue
        if(column == 0 or column == len(table[row])-1):
            visibleTrees+=1
            continue
        
        currentTree = table[row][column]

        # visible from left
        for left in reversed(range(0, column)):
            if(table[row][left] >= currentTree):
                break;
        if(left == 0):
            
            visibleTrees+=1
            continue;
        
        # visible from right
        for right in range(column+1, len(table[row])):
            if(table[row][right] >= currentTree):
                break;
        if(left == len(table[row])-1):
            visibleTrees+=1
            continue;
        
        # visible from top
        for top in reversed(range(0, row)):
            if(table[top][column] >= currentTree):
                break;
        if(top == 0):
            visibleTrees +=1;
            continue;

        # visible from bottom;
        for bottom in range(row+1, len(table)):
            if(table[bottom][column] >= currentTree):
                break;
        if(bottom == len(table)-1):
            print(currentTree, 'is visible from bottom', row, column)
            visibleTrees+=1;

print(visibleTrees)