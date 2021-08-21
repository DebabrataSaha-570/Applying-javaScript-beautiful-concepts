// inch to feet 

function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}

var Myinches = 132;
var feet = inchToFeet(Myinches);
console.log('my inches in feet', feet)



// mile to kilometer 
function mileToKilemeter(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilemeter(26.2)
console.log('marathon in km', marathon)


