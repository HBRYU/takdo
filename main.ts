let run = false
let prev_v = 0
let timer = 0
input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    run = !(run)
})
basic.forever(function () {
    if (run) {
        if (pins.analogReadPin(AnalogPin.P0) <= 25) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
        } else {
            if (pins.analogReadPin(AnalogPin.P0) >= 900) {
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P2, 1)
            } else {
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
            }
        }
        if (prev_v != pins.analogReadPin(AnalogPin.P0) || timer <= 0) {
            basic.showString("" + (pins.analogReadPin(AnalogPin.P0)))
            timer = 30
        }
        serial.writeLine("" + (timer))
        timer += -0.1
        prev_v = pins.analogReadPin(AnalogPin.P0)
        if (pins.analogReadPin(AnalogPin.P0) <= 25) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
        } else {
            if (pins.analogReadPin(AnalogPin.P0) >= 900) {
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P2, 1)
            }
        }
    }
})
basic.forever(function () {
	
})
