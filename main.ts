input.onButtonPressed(Button.A, function () {
    ans += 1
    basic.showNumber(ans, 50)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Variable)
    if (ans == Variable) {
        basic.showString("Alpha Female",100)
if (player_score == 10) {
            basic.showString("You won")
            game.gameOver()
        }
    } else if (ans != Variable) {
        basic.showString("Beta",100)
if (player_health == 0) {
            basic.showString("You lost")
            game.gameOver()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    ans += -1
    basic.showNumber(ans, 50)
})
let player_score = 0
let player_health = 0
let Variable = 0
let ans = 0
basic.showLeds(`
    # # # # #
    . # . # .
    . # . # .
    # . . . #
    # # # # #
    `)
let x1 = randint(0, 5)
let x2 = randint(0, 5)
let y1 = randint(0, 5)
let y2 = randint(0, 5)
let Player = game.createSprite(x1, y1)
let Treasure = game.createSprite(x2, y2)
let z = randint(1, 4)
let y = randint(-10, 10)
let x = randint(-10, 10)
ans = 0
if (z == 1) {
    Variable = x + y
    basic.showString("" + x + "+" + y)
} else if (z == 2) {
    Variable = x - y
    basic.showString("" + x + "-" + y)
} else if (z == 3) {
    Variable = x / y
    basic.showString("" + x + "/" + y)
} else if (z == 4) {
    Variable = x * y
    basic.showString("" + x + "x" + y)
}
player_health = 1
player_score = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (x1 == x2) {
            if (ans == Math.abs(Variable)) {
                Player.delete()
                y1 += 1
                Player = game.createSprite(x1, y1)
            } else if (ans != Math.abs(Variable)) {
                Player.delete()
                y1 += -1
                Player = game.createSprite(x1, y1)
            }
        } else if (y2 == y1) {
            if (ans == Math.abs(Variable)) {
                Player.delete()
                x1 += 1
                Player = game.createSprite(x1, y1)
            } else if (ans != Math.abs(Variable)) {
                Player.delete()
                x1 += -1
                Player = game.createSprite(x1, y1)
            }
        } else if (x1 == x2 && y2 == y1) {
            Player.delete()
            basic.showString("You Won!")
            game.gameOver()
        }
    } else {
        if (ans == Math.abs(Variable)) {
            Player.delete()
            x1 += 1
            y1 += 1
            Player = game.createSprite(x1, y1)
        } else if (ans != Math.abs(Variable)) {
            Player.delete()
            x1 += -1
            y1 += -1
            Player = game.createSprite(x1, y1)
        }
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.pause(5000)
        if (ans == Math.abs(Variable)) {
            player_score += 1
        } else if (ans != Math.abs(Variable)) {
            player_health = 0
        }
        basic.pause(5000)
        z = randint(1, 4)
        y = randint(-10, 10)
        x = randint(-10, 10)
        if (z == 1) {
            Variable = x + y
            basic.showString("" + x + "+" + y)
        } else if (z == 2) {
            Variable = x - y
            basic.showString("" + x + "-" + y)
        } else if (z == 3) {
            Variable = x / y
            basic.showString("" + x + "/" + y)
        } else if (z == 4) {
            Variable = x * y
            basic.showString("" + x + "x" + y)
        }
    }
})
basic.forever(function () {
    if (Variable > 20 || Variable < -20) {
        z = randint(1, 4)
        y = randint(-10, 10)
        x = randint(-10, 10)
        if (z == 1) {
            Variable = x + y
            basic.showString("" + x + "+" + y)
        } else if (z == 2) {
            Variable = x - y
            basic.showString("" + x + "-" + y)
        } else if (z == 3) {
            Variable = 0 / y
            basic.showString("" + x + "/" + y)
        } else if (z == 4) {
            Variable = x * y
            basic.showString("" + x + "x" + y)
        }
    }
})
