"""

Made by 1Emilis!

(do not steal, give me credits if u do)

"""
"""

Made by 1Emilis!

(do not steal, give me credits if u do)

"""
"""

Made by 1Emilis!

(do not steal, give me credits if u do)

"""
selectedData = 0
selected = 0
isNormal = 0
led.set_brightness(150)
isSafemode = 0
basic.show_leds("""
    # . . . #
        . . # # .
        . # . # .
        . # # . .
        # . . . #
""")
basic.pause(1000)
for index in range(10):
    if input.button_is_pressed(Button.AB):
        led.set_brightness(70)
        isSafemode = 1
        basic.show_string("Safe mode")
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . . . . .
        """)
        basic.pause(500)
    basic.pause(100)
if isSafemode == 0:
    basic.show_leds("""
        # # # # #
                . . . . .
                # . . . .
                . . . . .
                # # # # #
    """)
    basic.pause(200)
    basic.show_leds("""
        # # # # #
                . . . . .
                # # . . .
                . . . . .
                # # # # #
    """)
    basic.pause(200)
    basic.show_leds("""
        # # # # #
                . . . . .
                # # # . .
                . . . . .
                # # # # #
    """)
    basic.pause(200)
    basic.show_leds("""
        # # # # #
                . . . . .
                # # # # .
                . . . . .
                # # # # #
    """)
    basic.pause(200)
    basic.show_leds("""
        # # # # #
                . . . . .
                # # # # #
                . . . . .
                # # # # #
    """)
    basic.pause(100)
    basic.clear_screen()
    basic.show_string("Hi!")
    isNormal = 1
# Normal OS
# 

def on_forever():
    global isNormal, selected
    if isNormal == 1:
        isNormal = 0
        selected = 1
basic.forever(on_forever)

def on_forever2():
    global selected, selectedData
    if selected == 1:
        basic.show_string("1: ")
        if input.button_is_pressed(Button.B):
            selected = 2
        if input.button_is_pressed(Button.AB):
            selectedData = 1
    if selected == 2:
        basic.show_string("2:SOS Light")
        if input.button_is_pressed(Button.B):
            selected = 3
    if selected == 3:
        basic.show_string("3: Info")
        if input.button_is_pressed(Button.B):
            selected = 1
basic.forever(on_forever2)

def on_forever3():
    if selectedData == 1:
        pass
basic.forever(on_forever3)


def on_forever4():
    degrees = input.compass_heading()
    if degrees < 45:
        basic.show_string("N")
    elif degrees < 135:
        basic.show_string("E")
    elif degrees < 225:
        basic.show_string("S")
    elif degrees < 315:
        basic.show_string("W")
    else:
        basic.show_string("N")
basic.forever(on_forever)