import re

f = open("./input.txt", "r")
input = f.read().splitlines()

sum = 0
for i in input:
    x = re.findall(r'\d', i)
    sum = sum + int(x[0] + x[-1]) 

print(sum)  
