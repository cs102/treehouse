var adjective = prompt('Please type an adjective (Adjectives are describing words)');
var verb = prompt('Please type a verb (Verbs are doing words)');
var noun = prompt('Please type noun (a word that is the name of something,such as a person, animal, place, thing, quality, idea, or action) ');
alert('All done, Ready for your funny message?')
var message = noun + " likes eating cookies when " + verb + " also likes " + adjective

document.write(adjective);
document.write(verb);
document.write(noun);
document.write("<br/>");
document.write("<p>" + message + "</p>");

var nounPerson = prompt("Please enter the name of a person");
var adjectivePerson = prompt("Please provide a word that describes the person.")
var nounPlace = prompt("Please enter the name of a City, Country or Magical Land.");
var nounBodyPart = prompt("Please enter the name of a body part."); 
var adjectiveBodyPart = prompt("Please provide a word that describes the body part.")
var verbOne = prompt("Please provide an action word (i.e. jumped, ran).");
var verbTwo = prompt("Please provide another action word (i.e. jumped, ran).");

var storyPerson = nounPerson.toUpperCase() + " " + "was famous computer geek from the magical land of";
var storyPlace = " " + nounPlace.toUpperCase() + ".  " + nounPerson.toUpperCase() + " " + "had a very";
var storyAdjBodyPart = " " + adjectiveBodyPart.toUpperCase(); 
var storyBodyPart = " " + nounBodyPart.toUpperCase() + ", which always helped when they"
var storyVerbOne = " " + verbOne.toUpperCase() + ".  ";
var storyAdjPerson = nounPerson.toUpperCase() + " " + "was considered a very" + " " + adjectivePerson.toUpperCase() + " " + "person"; 
var storyVerbTwo = " " + "who always loved to" + " " + verbTwo.toUpperCase() + "."; 

alert("Thank you for that.  Are your ready to read your story?");

var story = storyPerson + storyPlace + storyAdjBodyPart + storyBodyPart + storyVerbOne + storyAdjPerson + storyVerbTwo;

document.write(story);