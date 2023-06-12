f = open("./input.txt", "r")
input = f.read().splitlines()

currentMax = 0;
caloriesCount = 0;

totalCalories = []

for i in input:
    if(i != ''):
        caloriesCount+=int(i);
    else:
         totalCalories.append(caloriesCount)
         caloriesCount=0;
        

totalCalories.sort(reverse=True)

totalTop3 = 0;
i=0;
for calorie in totalCalories:
    totalTop3+=calorie;
    i+=1;
    if(i==3):
        break;

print(totalTop3)