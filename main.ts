input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("10987654321 GO GO GO GO GO ")
    basic.showString("10987654321 GO GO GO GO GO ")
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    radio.sendString("SET UP")
    basic.showString("SET UP")
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
	
})
