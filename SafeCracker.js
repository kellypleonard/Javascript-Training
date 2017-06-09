"use strict";
// Set function to convert number to string with leading zeros:
function pad(num, size) {	
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
// Store random number between 0 and 999:
var targetNumber = Math.floor(Math.random() * 1000); 					
// Stores number as string with leading zeros:
var targetNumberAsString = pad(targetNumber,3);
// Make variable an array:
targetNumberAsString.split("");
//Set initial remaining guesses:
var GuessesRemaining = 20;
// Run loop while within number of guesses
var guess = "000";
do { document.getElementById("guess").innerHTML = guess;
    GuessesRemaining--;
}	
    while (GuessesRemaining > 0);  
	
