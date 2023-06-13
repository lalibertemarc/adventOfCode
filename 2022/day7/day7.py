

class Node ():
    def __init__(self, name, isDir, size, parent=None, children=None):
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
                totalSize+=child.size;
            else:
                totalSize+=child.getChildrenSize()

        return totalSize


f = open("./input", "r")
input = f.read().splitlines()


main = Node('/', True, 0, children=[])
currentParent = main

navigation = []
navigation.append(currentParent)

for i in range(2, len(input)):
    command = input[i].split(' ')
    if(command[1] == 'ls'):
        continue

    if(command[0] == 'dir'):
        dirName = command[1]
        #print('new dir', dirName)
        newNode = Node(dirName, True, 0, parent=currentParent)
        currentParent.children.append(newNode)
    elif(command[1] == 'cd' and command[2] =='..'):
        # print('back one dir')
        # print('currentParrent', currentParent.name)
        #back one dir
        navigation.pop();
        currentParent = navigation[-1]
        # print('new currentParrent', currentParent.name)
    elif(command[1] == 'cd' and command[2] !='..'):
        #go inside dir
        dirName = command[2]
        # print('currentParent', currentParent.name)
        # print('going into', dirName)
        currentParent = next((f for f in currentParent.children if f.name == dirName), None)
        navigation.append(currentParent)
        #print('currentParent', currentParent.name)
    else:
        #newFile
        fileName = command[1]
        size = command[0]
        #print('newfile', fileName, size)
        newNode = Node(fileName, False, int(size), parent=currentParent)
        currentParent.children.append(newNode)

# for c in main.children :
#     print(c.name)

def printTree(node):
    if(len(node.children)>0):
        print(node.name)
        for c in node.children:
            print('-', c.name, c.size)
            # if not c.isDir:
            #     print('-', c.name, c.size)
            # else:
            #     print('-', c.name)

        for c in node.children:
            if(c.isDir):
                printTree(c)
 

maxSize = 100000

   

# treeTraversal(main)
# print(main.size)

print(main.getChildrenSize())

def computeAnswer(node):
    totalSize = 0;
    if(len(node.children)>0):
        for c in node.children:
            childSize = c.getChildrenSize()
            if childSize < maxSize:
                totalSize += childSize;
    return totalSize;

#print(computeAnswer(main))
