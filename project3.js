// Bradley Perkins
// SDI 1407
// Project 2
// 7-15-14


// Global Variables

var bike = "mountain bike ";
var rack = "bike rack";
var air = true;
var ready = "It looks like you\'re ready to go!";
var maxPsi =  65 ;
var brakesGood = false;
var fixBrakes = true;

// Procedure
var totalBikes = function(numBikes){
	if (numBikes <= 4){
		console.log("The " + numBikes + " bikes will fit on the rack together.");
	}else {
		console.log("All of the bikes will not fit on the rack at the same time.");
	}
};
totalBikes(3);



//Boolean function

// if its above a certain percentage of rain then a rain coat is needed.

console.log("We better check to see if we need our rain gear.");

var rainGear = function(rainPercent){
	if (rainPercent < 40) {
			var noCoat = true
			console.log("No coat needed!!!");
			return noCoat;
	} else {
		console.log("Bring a coat!!!");
		return;
	}
};

var coatCheck = rainGear(35);



//nested conditional
console.log("we should now check the brakes.");

if (brakesGood === true){
	console.log("The brakes look pretty good.");
	if (fixBrakes === true){
		console.log("Lets tweak the brakes a bit.");
	} else {
		console.log("I think we might be good here");
	};
}
 else {
	console.log("Lets head to the next step");
};















