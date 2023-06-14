f = open("./input", "r")
input = f.read().splitlines()

opponentRock = 'A'
opponentPaper = 'B'
opponentScissors = 'C'

answerRock = 'X'
answerPaper = 'Y'
answerScissors = 'Z'

outcomeLose = 'X'
outcomeDraw = 'Y'
outcomeWin = 'Z'

pointsRock = 1
pointsPaper = 2
pointsScissors = 3

pointsDraw = 3
pointsVictory = 6
pointsDefeat = 0

points = 0

for i in input:
    draws = i.split(' ')
    opponentDraw = draws[0]
    outcome = draws[1]
    if opponentDraw == opponentRock:
        if outcome == outcomeLose:
            answerDraw = answerScissors
        elif outcome == outcomeDraw:
            answerDraw = answerRock
            points += pointsDraw
        elif outcome == outcomeWin:
            answerDraw = answerPaper
            points += pointsVictory
    elif opponentDraw == opponentPaper:
        if outcome == outcomeLose:
            answerDraw = answerRock
        elif outcome == outcomeDraw:
            answerDraw = answerPaper
            points += pointsDraw
        elif outcome == outcomeWin:
            answerDraw = answerScissors
            points += pointsVictory
    elif opponentDraw == opponentScissors:
        if outcome == outcomeLose:
            answerDraw = answerPaper
        elif outcome == outcomeDraw:
            answerDraw = answerScissors
            points += pointsDraw
        elif outcome == outcomeWin:
            answerDraw = answerRock
            points += pointsVictory

    if answerDraw == answerRock:
        points += pointsRock
    elif answerDraw == answerPaper:
        points += pointsPaper
    elif answerDraw == answerScissors:
        points += pointsScissors

print(points)
