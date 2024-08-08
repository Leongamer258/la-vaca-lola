input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("HOLA GONZALO MEJOR PROFE DEL MUNDO")
})
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    # # # # #
    `)
