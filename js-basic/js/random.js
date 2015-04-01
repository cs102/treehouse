// var input1 = prompt("Please enter a starting number");
// var bottomNumber = parseInt(input1);
// var input = prompt("Please type a number");
// var topNumber = parseInt(input);
// var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
// var message = "<p>" + randomNumber + " is a number between 1 and 6."+ bottomNumber + " and " + topNumber + "</p>";
// document.write(message);


//// New Program

/*
Random number guessing game  
*/


 
var correctGuess = false

// Generate random number from 1 to 6
var randomNumber = Math.floor(Math.random() * 6) + 1;

var guess = prompt("I'm thinking of a number between 1 and 6, what is it ?");

/* Test to see if player is
1. correct
2. guess too high
3. guess to low
*/

if ( parseInt(guess)=== randomNumber ) {
	correctGuess = true;
} else if (parseInt(guess) < randomNumber) {  
	var guessMore = prompt ('Try again. The number I am thinking of is more than ' + guess);
	if (parseInt(guessMore) === randomNumber) {
		correctGuess = true;
	}

} else if (parseInt(guess) > randomNumber) {
	var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
	if (parseInt(guessMore) === randomNumber) {
		correctGuess = true;
	} 

} 

// test if player is correct
if (correctGuess){
	document.write("<p> You guessed the number </p>");
}else {
	document.write("<p>Sorry the number was " + randomNumber + ".</p>");
}