var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;

var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('<p>'+ 'There are ' + secondsPerDay + ' seconds in a day' + '</p>');

var yearsAlive = secondsPerDay * 35;
document.write('<p>' + 'I been alive ' + yearsAlive + ' seconds'+ '</p>')

// var HTMLBadges = prompt('How many HTML badges do you have?');
// var CSSBadges = prompt('How many CSS badges do you have?');
// // var totalBages = HTMLBadges + CSSBadges;
// var totalBages = parseInt(HTMLBadges) + parseInt(CSSBadges);
// alert('Wow! you have ' + totalBages + ' badges!');

document.write(Math.floor(Math.random() * 6))+1;
var dieRoll = (Math.floor(Math.random() * 6))+1;
document.write('<p>' + dieRoll + '</p>');