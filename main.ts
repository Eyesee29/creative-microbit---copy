input.onButtonPressed(Button.A, function () {
    ans += 1
    basic.showNumber(ans)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
    if (ans == 0) {
        basic.showString("Alpha Female")
    } else if (ans != 0) {
        basic.showString("Beta")
    }
})
input.onButtonPressed(Button.B, function () {
    ans += -1
    basic.showNumber(ans)
})
let Variable = 0
let ans = 0
let Player = game.createSprite(randint(0, 5), randint(0, 5))
let Treasure = game.createSprite(randint(0, 5), randint(0, 5))
Player.set(LedSpriteProperty.Brightness, 50)
Treasure.set(LedSpriteProperty.Brightness, 250)
let z = randint(1, 4)
let y = randint(1, 10)
let x = randint(1, 10)
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
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.pause(3000)
        if (ans == 0) {
            Player.change(LedSpriteProperty.X, 1)
            game.addLife(1)
        } else if (ans != 0) {
            Player.change(LedSpriteProperty.X, -1)
            game.removeLife(-1)
        }
        basic.pause(3000)
        z = randint(1, 4)
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
