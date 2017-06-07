var TargetNumber = Math.floor(Math.random() * 1000); // Stores a random number between 0 and 999
	function pad(num, size) {						 // Converts the number to string with leading zeros
		var s = num+"";
		while (s.length < size) s = "0" + s;
		return s;
		}
var TargetNumberAsString = pad(TargetNumber,3);     // Stores number as variable.
TargetNumberAsString.split(""); 					// Makes variable an array (required to prevent errors)
var text = "";
var GuessesRemaining = 20;
// while (GuessesRemaining > 0) {				 	// Run loop while within number of guesses
   document.getElementById("demo").innerHTML = "What is your guess?";
 //  i--;
//}