radio.onReceivedValue(function (name, value) {
    if (status == 0) {
        status = 1
        sperre = 1
        if (value == 1) {
            basic.setLedColor(0xff0000)
        }
        if (value == 2) {
            basic.setLedColor(0x0000ff)
        }
        if (value == 3) {
            basic.setLedColor(0x00ff00)
        }
        basic.showString(name)
    }
})
let sperre = 0
let status = 0
radio.setGroup(3001)
status = 0
sperre = 0
basic.showString("?")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        status = 0
        sperre = 0
        basic.turnRgbLedOff()
        basic.showString("?")
    }
})
