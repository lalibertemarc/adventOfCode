f = open("./input", "r")
input = f.read().splitlines()

print(input)


def createSet(low, up):
    array = []
    for i in range(low, up+1):
        array.append(i)
    return set(array)


def createBounds(string):
    return (int(string.split('-')[0]), int(string.split('-')[1]))


totalIntersection = 0

for i in input:
    ranges = i.split(',')
    range1 = ranges[0]
    range2 = ranges[1]

    bounds1 = createBounds(range1)
    set1 = createSet(bounds1[0], bounds1[1])
    bounds2 = createBounds(range2)
    set2 = createSet(bounds2[0], bounds2[1])

    intersection = set1 & set2
    print(intersection)

    if (len(intersection) > 0):
        totalIntersection += 1

print('totalIntersection', totalIntersection)
