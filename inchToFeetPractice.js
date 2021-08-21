// inch to feet
function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 144;
var result = inchToFeet(myInches)
console.log('my inches in feet', result)

// kilometer to meter 

function kmToMeter(km) {
    var meter = km * 1000;
    return meter;
}
var walkingKilometer = 5;
var output = kmToMeter(walkingKilometer)
console.log('result in meter', output)