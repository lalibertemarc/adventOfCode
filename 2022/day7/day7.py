cheat = []


class Node ():
    def __init__(self, name, isDir, size,parent = None, children=None):
        self.name = name
        self.isDir = isDir
        self.size = size
        self.parent = parent
        if children:
            self.children = children
        else:
            self.children = []

    def getChildrenSize(self):
        totalSize = 0
        for child in self.children:
            if not child.isDir:
                totalSize += child.size
            else:
                totalSize += child.getChildrenSize()
        cheat.append(totalSize)
        return totalSize


f = open("./input", "r")
input = f.read().splitlines()

main = Node('/', True, 0, children=[])
currentParent = main


for i in range(2, len(input)):
    command = input[i].split(' ')
    if (command[1] == 'ls'):
        continue

    if (command[0] == 'dir'):
        # new dir
        dirName = command[1]
        newNode = Node(dirName, True, 0, parent = currentParent)
        currentParent.children.append(newNode)
    elif (command[1] == 'cd' and command[2] == '..'):
        # back one dir
        currentParent = currentParent.parent
    elif (command[1] == 'cd' and command[2] != '..'):
        # go inside dir
        dirName = command[2]
        currentParent = next(
            (f for f in currentParent.children if f.name == dirName), None)
    else:
        # newFile
        fileName = command[1]
        size = command[0]

        newNode = Node(fileName, False, int(size), parent=currentParent)
        currentParent.children.append(newNode)


maxSize = 100000
# print(main.getChildrenSize())
# def computeFirstAnswer(node):
#     totalSize = 0;
#     if(len(node.children)>0):
#         for c in node.children:
#             childSize = c.getChildrenSize()

#             if childSize < maxSize:
#                 totalSize += childSize;

#             if(len(c.children)>0):
#                  totalSize += computeFirstAnswer(c);
#     else:
#         return node.size
#     return totalSize;

totalDiskSize = 70000000
updateSize = 30000000

totalFreeSize = totalDiskSize - main.getChildrenSize()
needToFreeSize = updateSize-totalFreeSize

print('do we have enough space to update?', totalFreeSize >= updateSize)
print('totalFreeSize', totalFreeSize)
print('needToFreeSize', needToFreeSize)

cheat.sort()
for i in range(0, len(cheat)):
    if (cheat[i] > needToFreeSize):
        print(cheat[i])
        break;
