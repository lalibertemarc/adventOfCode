import numpy as np
f = open("./input", "r")
input = f.read().splitlines()

table = []

for line in input:
    newRow = []
    for c in line:
        newRow.append(c)
    table.append(newRow)

table = np.array(table)
# print(table)

def computeFirstAnswer():
    visibleTrees = 0
    for row in range(0, len(table)):
        for column in range(0, len(table[row])):
            currentTree = table[row][column]
            if (row == 0 or row == len(table)-1):
                print('adding first or last row', row, column, currentTree)
                visibleTrees += 1
                continue
            if (column == 0 or column == len(table[row])-1):
                print('adding first or last column', row, column, currentTree)
                visibleTrees += 1
                continue
            
            # visible from left
            sawBiggerTree = False
            for left in reversed(range(0, column)):
                if (table[row][left] >= currentTree):
                    sawBiggerTree = True
                    break
            if (not sawBiggerTree):
                print('adding visible from left', row, column, 'tree', currentTree)
                visibleTrees += 1
                continue

            # visible from right
            sawBiggerTree = False
            for right in range(column+1, len(table[row])):
                if (table[row][right] >= currentTree):
                    sawBiggerTree = True
                    break
            if (not sawBiggerTree):
                print('adding visible from right', row, column, 'tree', currentTree)
                visibleTrees += 1
                continue

            # visible from top
            sawBiggerTree = False
            for top in reversed(range(0, row)):
                if (table[top][column] >= currentTree):
                    sawBiggerTree = True
                    break
            if (not sawBiggerTree):
                print('adding visible from top', row, column, 'tree', currentTree)
                visibleTrees += 1
                continue

            # visible from bottom;
            sawBiggerTree = False
            for bottom in range(row+1, len(table)):
                if (table[bottom][column] >= currentTree):
                    sawBiggerTree = True
                    break
            if (not sawBiggerTree):
                print('adding visible from bottom', row, column, 'tree', currentTree)
                visibleTrees += 1
    print(visibleTrees)

