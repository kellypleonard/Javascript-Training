"use strict";
// Set function to convert number to string with leading zeros:
function pad(num, size) {	
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}
// Store random number between 0 and 999 as string with leading zeros:
var combination = pad(Math.floor(Math.random() * 1000),3);
// Make variable an array:
combination.split("");
//Set initial remaining guesses:
var guessesRemain = 7;
var guessListText = "";
var arrayOfGuesses = [];
/* //Print target number for testing purposes only
document.getElementById("targetNum").innerHTML = combination; */

// User can submit guesses within number of guesses, function will check
function inputGuess() {
    var currentGuess = "000";
	var currentGuessArray = [];
	var exactPlace = 0;
    var wrongPlace = 0;
    // Get the value of the input field with id="guessEntered"
    currentGuess = pad(document.getElementById("guessEntered").value,3);
	// Make current guess into array
	currentGuessArray = currentGuess.split("");
    // Add the current guess to the end of the array of guesses
	arrayOfGuesses.push(currentGuess);
	// Calculate number of matches in exact place
	exactPlace = (Number(combination[0] == currentGuessArray[0]) + Number(combination[1] == currentGuessArray[1]) + Number(combination[2] == currentGuessArray[2]));
	wrongPlace = (Number(combination[0] == currentGuessArray[1]) + Number(combination[0] == currentGuessArray[2]) + Number(combination[1] == currentGuessArray[0]) + Number(combination[1] == currentGuessArray[2]) + Number(combination[2] == currentGuessArray[0]) + Number(combination[2] == currentGuessArray[1]));
	
	// If currentGuess is equal to the Target Number, end with Win else provide stats or end with Lose.	
    switch(Number(currentGuess == combination) * 2 + 
		(Number(guessesRemain != 1))) {
        case 0:
			guessesRemain--;
			guessListText = currentGuess.concat("&nbsp;&nbsp;", "<span class=\"exactplace\">", exactPlace, "</span>&nbsp;<span class=\"wrongplace\">", wrongPlace, "</span><br>", guessListText);
			document.getElementById("response").innerHTML = "Sorry, you're out of guesses. The combination was " + combination + ". Please refresh the page to try a new game.";
			document.getElementById("guessList").innerHTML = guessListText;
			break;
		case 1:
		    guessesRemain--;
            guessListText = currentGuess.concat("&nbsp;&nbsp;", "<span class=\"exactplace\">", exactPlace, "</span>&nbsp;<span class=\"wrongplace\">", wrongPlace, "</span><br>", guessListText);
	        document.getElementById("response").innerHTML = "Try again.";
            document.getElementById("guessList").innerHTML = guessListText;
			break;
		case 2:
		case 3:
            guessesRemain--;
			guessListText = currentGuess.concat("&nbsp;&nbsp;", "<span class=\"exactplace\">", exactPlace, "</span>&nbsp;<span class=\"wrongplace\">", wrongPlace, "</span><br>", guessListText);
			document.getElementById("response").innerHTML = "You guessed it!";
			document.getElementById("guessList").innerHTML = guessListText;
			break;
		default:
		    document.getElementById("response").innerHTML = "Wow. Something weird happened. Please notify the game designer.";
			break;
	}
	document.getElementById("remaining").innerHTML = "Guesses remaining: " + guessesRemain;
}
