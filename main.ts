/**
 * Made by 1Emilis!
 * 
 * (do not steal, give me credits if u do)
 */
/**
 * Made by 1Emilis!
 * 
 * (do not steal, give me credits if u do)
 */
/**
 * Made by 1Emilis!
 * 
 * (do not steal, give me credits if u do)
 */
let degrees = 0
let selectedData = 0
let selected = 0
let isSafemode = 0
let isNormal = 0
led.setBrightness(105)
basic.showLeds(`
    # . . . #
    . . # # .
    . # . # .
    . # # . .
    # . . . #
    `)
basic.pause(1000)
for (let index = 0; index < 10; index++) {
    if (input.buttonIsPressed(Button.AB)) {
        led.setBrightness(70)
        isNormal = 1
        isSafemode = 1
        basic.showString("SaverMode")
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
    }
    basic.pause(100)
}
if (isSafemode == 0) {
    basic.showLeds(`
        # # # # #
        . . . . .
        # . . . .
        . . . . .
        # # # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        # # # # #
        . . . . .
        # # . . .
        . . . . .
        # # # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        # # # # #
        . . . . .
        # # # . .
        . . . . .
        # # # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        # # # # #
        . . . . .
        # # # # .
        . . . . .
        # # # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.showString("Hi!")
    isNormal = 1
}
basic.forever(function () {
    if (selected == 1) {
        basic.showString("1: Compass")
        for (let index = 0; index < 10; index++) {
            if (input.buttonIsPressed(Button.B)) {
                selected = 2
            }
            basic.pause(100)
        }
        for (let index = 0; index < 10; index++) {
            if (input.buttonIsPressed(Button.AB)) {
                input.calibrateCompass()
                selectedData = 1
                selected = 0
            }
            basic.pause(100)
        }
    }
    if (selected == 2) {
        basic.showString("2:SOS Light")
        for (let index = 0; index < 10; index++) {
            if (input.buttonIsPressed(Button.B)) {
                selected = 3
            }
            basic.pause(100)
        }
        for (let index = 0; index < 10; index++) {
            if (input.buttonIsPressed(Button.AB)) {
                selectedData = 2
                selected = 0
            }
            basic.pause(100)
        }
    }
    if (selected == 3) {
        basic.showString("3: Info")
        for (let index = 0; index < 10; index++) {
            if (input.buttonIsPressed(Button.B)) {
                selected = 1
            }
            basic.pause(100)
        }
        for (let index = 0; index < 10; index++) {
            if (input.buttonIsPressed(Button.AB)) {
                selectedData = 3
                selected = 0
            }
            basic.pause(100)
        }
    }
})
basic.forever(function () {
    if (selectedData == 1) {
        input.calibrateCompass()
        degrees = input.compassHeading()
        if (degrees < 45) {
            basic.showArrow(ArrowNames.North)
        } else if (degrees < 135) {
            basic.showArrow(ArrowNames.East)
        } else if (degrees < 225) {
            basic.showArrow(ArrowNames.South)
        } else if (degrees < 315) {
            basic.showArrow(ArrowNames.West)
        } else {
            basic.showString("X")
        }
    }
    if (selectedData == 2) {
        led.setBrightness(255)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(100)
    }
    if (selectedData == 3) {
        basic.showString("ver: 1.1 Beta")
    }
})
basic.forever(function () {
    if (isNormal == 1) {
        isNormal = 0
        selected = 1
    }
})
