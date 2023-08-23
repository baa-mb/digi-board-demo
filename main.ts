function led2 (zustand: boolean) {
    pins.analogWritePin(AnalogPin.P16, 1023)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P16, 0)
    basic.pause(1000)
}
function neop (zustand: boolean) {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(1000)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(500)
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    strip.show()
    basic.pause(500)
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Indigo))
    strip.show()
    basic.pause(500)
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    basic.pause(500)
    strip.shift(1)
    strip.show()
    basic.pause(5000)
}
input.onButtonPressed(Button.A, function () {
	
})
function init () {
    strip = neopixel.create(DigitalPin.P14, 4, NeoPixelMode.RGB)
}
input.onButtonPressed(Button.B, function () {
	
})
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Heart)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
init()
basic.forever(function () {
    led2(true)
    neop(true)
})
