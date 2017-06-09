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
var guessesRemaining = 20;
// Run loop while within number of guesses
var guessArray = [];
var guessListText = ""
var guess = 1;
document.getElementById("targetNum").innerHTML = targetNumberAsString;
function inputGuess() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;
	// Add the value to the guess array
	guessArray[guessArray.length] = x;
    // If x is Not a Number or is equal to the guess
    if (isNaN(x) || x == targetNumber) {
        text = "You guessed it!";
    } else {
        text = "Try again.";
    }
    document.getElementById("response").innerHTML = text;
	guessListText += (guessArray[guess - 1]).toString() + "<br>";
    document.getElementById("guessList").innerHTML = guessListText;
	guess++;
}
