import re

f = open("./input.txt", "r")
input = f.read().splitlines()

row = 0
totalSum=0

symbols = ['.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

for i in input:
    parts = re.findall('(\d*)', i)
    parts = list(filter(None, parts))
    # print(parts)
    for partNumber in parts:
        indexOfPart = i.index(partNumber)
        lenghtOfPart = len(partNumber)
        # print('index', indexOfPart)
        # print('length', lenghtOfPart)

       
        # hasSymbolToRight = i[indexOfPart+lenghtOfPart] != '.'

        hasSymbolToRight = False
        if indexOfPart + lenghtOfPart+1 >= len(i):
            hasSymbolToRight =  False
        elif i[indexOfPart+lenghtOfPart] not in symbols :
            hasSymbolToRight = True

        print('right', partNumber, hasSymbolToRight)

        hasSymbolToLeft = False
        if indexOfPart -2 < 0:
            hasSymbolToLeft = False
        elif i[indexOfPart-1] not in symbols:
            hasSymbolToLeft = True

        print('left', partNumber, hasSymbolToLeft)

        hasSymbolToTop = False

        # top
        if(row > 1):
            #print('in top condition')
            for j in range(indexOfPart-1, indexOfPart-1 + lenghtOfPart+2):
               
                if j > len(i) -1:
                    break;
                symbol = input[row-1][j]
        
                if(symbol not in symbols):
                    hasSymbolToTop = True
                    continue;
    
            
        print('top', partNumber, hasSymbolToTop)

        # bottom
        hasSymbolOnBotton = False
        if(row != len(input)-1):

            for k in range(indexOfPart-1, indexOfPart-1+lenghtOfPart+2):
                #print('in bottom loop', k)
                if k > len(i) -1:
                    break
                symbol = input[row+1][k]
            
                #print(symbol)
                if(symbol not in symbols):
                    hasSymbolOnBotton = True
                    continue;
        else:
            hasSymbolOnBotton = False

        print('bottom',partNumber,hasSymbolOnBotton)
        
        if hasSymbolOnBotton or hasSymbolToTop or hasSymbolToLeft or hasSymbolToRight:
            totalSum = totalSum + int(partNumber)

    
    row += 1
  
    print(parts)
    print('-----------------')

print(totalSum)