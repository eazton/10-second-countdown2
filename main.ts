input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("10987654321 GO GO GO GO GO ")
    basic.showString("10987654321 GO GO GO GO GO ")
})
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
})
