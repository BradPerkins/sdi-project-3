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

// JSON
var route = {
	"myRoutes": [
		{
			"miles" : 25,
			"name" : "scenic",
			"time" : 30,
		},
		{ 
			"miles" : 20,
			"name" : "city",
			"time" : 30,
		},
		{
			"miles" : 20,
			"name" : "mix",
			"time" : 15
		}
	]		
};
 console.log(route.myRoutes);	



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
var braking = function(){
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
}
return braking
};


// Number Function
var numFunction = function(checkAir){
	for (var actualPsi = checkAir; actualPsi <= maxPsi; actualPsi+=5){
		console.log(actualPsi + " added to the tires");

	}
	return checkAir;	
};
var addAir = numFunction(40);


//Math with While loop
var airCheck = confirm("Check the air in the bike tires.");
var pressure = function(tirePsi){
	while(tirePsi <= 65) {
		console.log( tirePsi + " PSI filled in.");
		tirePsi+=5;
	}
	return tirePsi;
};

var psiCheck = pressure(50);


//Array method, array property
var difBikes = function(multiBikes){
	var bikeArray = ["blue bike", "red bike", "black bike"];
	bikeArray[bikeArray.length] = "red bike";

	for (var i = 0; i < bikeArray.length; i++) {

		console.log(bikeArray[i]);
	}
	return multiBikes;
};

var useBike = difBikes("I have a couple of different mountain bike thati like to use, depending on the type of trails i go on.");

//String Functions

var gearUp = function(lockBikes, helmet){
	var lockIt = (" lock the bikes down on the rack.  ");
	var gear = ("all of your gear!");

	return lockBikes + lockIt + helmet + gear;
};

var combine = gearUp("Dont forget some H2O and also", "Plus be sure to grab a protien bar along with ");
console.log(combine);

//Returned values
console.log(coatCheck);
console.log(addAir);
console.log(psiCheck);
console.log(useBike);
console.log(combine);
console.log(psiCheck + " psi means we are good to go.");
console.log("It took " + addAir + " psi added to the tires.");











