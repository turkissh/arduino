var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Create an Led on pin 13
  var led = new five.Led(11);
  var led2 = new five.Led(10);
  button = new five.Button(7);
  var piezo = new five.Piezo(3);

  // Injects the piezo into the repl
  board.repl.inject({
    piezo: piezo
  });

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

   

  // Inject the `button` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    button: button
  });

  // Button Event API

  // "down" the button is pressed
  button.on("down", function() {
    callBuzzer(piezo);
    led.pulse();  
  });

  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
  //        set
  button.on("hold", function() {
    console.log("hold");
  });

  // "up" the button is released
  button.on("up", function() {
    led.stop();
  });



});

function callBuzzer(piezo) {
	
	 // Plays a song
  piezo.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song: [
      ["C4", 1 / 4],
      ["D4", 1 / 4],
      ["M4", 1 / 4],
      ["C4", 1 / 4],
      ["D4", 1 / 4],
      ["M4", 1 / 4],
      ["M4", 1 / 4],
      ["F4", 1 / 4],
      ["G4", 1 / 4],
      [null, 1 / 4],
      ["C4", 1 / 4],
      ["D4", 1 / 4],
      ["M4", 1 / 4],
      ["C4", 1 / 4],
      ["D4", 1 / 4],
      ["M4", 1 / 4],
      ["M4", 1 / 4],
      ["F4", 1 / 4],
      ["G4", 1 / 4],
      [null, 1 / 4],
      ["C4", 1 / 4],
      ["D4", 1 / 4],
      ["M4", 1 / 4],
      ["C4", 1 / 4],
      ["D4", 1 / 4],
      ["M4", 1 / 4],
      ["M4", 1 / 4],
      ["F4", 1 / 4],
      ["G4", 1 / 4],
    ],
    tempo: 100
  });

  // // Plays the same song with a string representation
  // piezo.play({
  //   // song is composed by a string of notes
  //   // a default beat is set, and the default octave is used
  //   // any invalid note is read as "no note"
  //   song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
  //   beats: 2 / 4,
  //   tempo: 100
  // });

}