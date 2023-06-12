from anytree import Node, RenderTree, NodeMixin, Walker

class MyNode (NodeMixin):
    def __init__(self, name, isDir, size, parent=None, children=None):
        self.name = name
        self.isDir = isDir
        self.size = size
        self.parent = parent
        if children: 
            self.children = children


f = open("./input", "r")
input = f.read().splitlines()


main = Node("/")
currentParent = main


for i in input:
    command = i.split(' ')
    if(command[0] == 'dir'):
        newNode = MyNode(command[1], True, 0, currentParent)
    elif(command[0] == 'cd' and command[1] !='..'):
        currentParent = Node(command[1])
    else:
        newNode = MyNode(command[1], False, int(command[0]), currentParent)


for pre, fill, node in RenderTree(main):
     print("%s%s" % (pre, node.name))

