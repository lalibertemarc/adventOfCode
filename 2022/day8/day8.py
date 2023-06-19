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


def computeSecondAnswer():
    maximumScenicScore = 0;
    for row in range(0, len(table)):
        for column in range(0, len(table[row])):
            currentTree = table[row][column]

            # visible from left
            visibleTreesOnLeft = 0
            for left in reversed(range(0, column)):
                if (table[row][left] < currentTree):
                    visibleTreesOnLeft +=1 
                if(table[row][left] >= currentTree):
                    visibleTreesOnLeft +=1 
                    break
            #print(currentTree, 'visibleTreesOnLeft', visibleTreesOnLeft)

             # visible from right
            visibleTreesOnRight = 0
            for right in range(column+1, len(table[row])):
                if (table[row][right] < currentTree):
                    visibleTreesOnRight +=1 
                if(table[row][right] >= currentTree):
                    visibleTreesOnRight +=1 
                    break
            #print(currentTree, 'visibleTreesOnRight', visibleTreesOnRight)

             # visible from top
            visibleTreesOnTop = 0
            for top in reversed(range(0, row)):
                if (table[top][column] < currentTree):
                    visibleTreesOnTop +=1 
                if(table[top][column] >= currentTree):
                    visibleTreesOnTop +=1 
                    break
            # print(currentTree, 'visibleTreesOnTop', visibleTreesOnTop)

            # visible from bottom;
            visibleTreesOnBottom= 0
            for bottom in range(row+1, len(table)):
                if (table[bottom][column] < currentTree):
                    visibleTreesOnBottom +=1 
                if(table[bottom][column] >= currentTree):
                    visibleTreesOnBottom +=1 
                    break
            #print(currentTree, 'visibleTreesOnBottom', visibleTreesOnBottom)

            currentScenicScore = visibleTreesOnLeft * visibleTreesOnRight * visibleTreesOnTop * visibleTreesOnBottom

            if(currentScenicScore > maximumScenicScore):
                maximumScenicScore = currentScenicScore

    print(maximumScenicScore)
computeSecondAnswer()