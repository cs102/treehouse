// single line comment.
console.log("hello from script.js");

console.log ("hello again");

/* Multi line comment
var name = prompt("What is your name");
alert("Hi " + name + " hope you are doing well today");

*/

// var name = prompt("What is your name ?")


/* If statement 

console.log("before")
if (name) {
	console.log("if block");
} else {
	console.log("else block");
}
console.log("after")

*/
console.log("before")

var counter = 10;

while (counter) {
	console.log("hola Emilee");
	counter = counter -1;
}

console.log("after")


/*
for (var counter = 10;counter; counter = counter-1) {
	console.log("Tqm Em", counter);
};

for (var i = 100; i; i=i-1) {
	console.log(i);
};


var friends = ["Allison", "Evan", "Michael", "Sarah", "Sonia"];
console.log(friends);
console.log(friends.length);
friends[2];
console.log(friends[2]);

var friendNumber = 1;
console.log(friends[friendNumber]);

console.log("----- for loop-----")

for (var i = 0; i < 4; i+=1) {
	console.log(friends[i]);
}

console.log("----- for loop using friends.length -----")

for (var i = 0; i < friends.length; i+=1) {
	console.log(friends[i]);
}
*/

/*

console.log("----- objects -----")

var me = {
	first_name: "Edgar",
	anime: "Naruto",
	movie: "Matrix",
	"Employee Number": 1
}

me.first_name = "Kelevra";
// same as above using subscript operator.
me["first_name"] = "Kelevra";

console.log(me.first_name);
console.log(me.anime);
console.log(me.movie);
console.log(me["Employee Number"]);
console.log(me);
console["log"](me);

// subscript operator to get value out of an Object.
var key = "anime"

console.log(me[key])

console.log("----- objects movie-----")

var movie = {
   title : "Star Wars Episode V: The Empire Strikes Back",
   director : "George Lucas",
   "year of release" :  1980
}

var key = "year of release";
var title = title;

console.log(movie[key]);
console.log(movie.title);

console.log("----- array -----")
var fruits = ["Apple", "Orange","Banana","Grapes"];
console.log(fruits);

console.log("----- objects movie-----")
var movie = {
   title : "Star Wars",
   director : "George Lucas"
}

console.log(movie.director);
*/

// alert("Hello Edgar");

var sayHello = function() {
	var message = "Hello"
	message = message + " Emilee!";
	console.log(message);

	//console.log("Hello Emilee!");
}

var debug = function(message) {
	console.log("debug", message);
}

var doubleNumber = function (num) {
	return num * 2;
}

debug(doubleNumber(7));

sayHello();
var x = 1;
console.log(x);
debug("x has been set");
debug(x);

sayHello();

x += 10;
console.log(x);
debug(x);

var y= 100;
console.log(y);
debug(y);

sayHello();

var f = function(a , b){
  return a + b;
}

var x = f("Hello", "World");
console.log(x);