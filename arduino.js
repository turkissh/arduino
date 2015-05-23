var five = require("johnny-five");
var stdio = require('stdio');
var board = new five.Board();

board.on("ready", function() {

  // Create an Led on pin 13
  var led = new five.Led(13);
  var led2 = new five.Led(10);

  // Blink every half second

  // led.blink(500);
  // led2.blink(200);

  process.argv.forEach(function (val, index, array) {
	
  	if(val == "azul"){
		led.blink(500);  		
  	}else if(val == "rojo"){
  		led2.blink(200);
  	}

  });


});