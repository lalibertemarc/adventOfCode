f = open("./input", "r")
input = f.read()

i = 0
marker = []
for char in input:
    i += 1
    marker.append(char)
    if (len(marker) == 14):
        check = set(marker)
        if len(marker) != len(check):
            marker.pop(0)
        else:
            break


print(i)
