// variable 
var time = '10.15pm';
var bookPrice = 150;
var isWhite = false;

// array 
var partners = ['sajid', 'modij', 'nojid', 'lazid']
var elementCount = partners.length;
var nojidPositon = partners.indexOf('nojid');
partners.push('kajit')
partners.pop();

// conditionals
if (bookPrice < 120) {
    console.log('I will buy this book')
}
else {
    console.log('mama, kichu discount den na!!')
}

// while loop
var i = 0;
while (i <= 17) {
    console.log(i);
    i++;
}

// for loop 

for (i = 0; i < 17; i++) {
    console.log(i)
}

// function 
function isMoonUp(time) {
    if (time >= 19 && time <= 5) {
        return true;
    }

    return false;

}
var moonStatus = isMoonUp(21);

// let const 
// value of variable could change 

let price = 27;
price = 29;
price = 31;

// value of the variable will not change 

const MyName = 'lal e lal mr. Helal';

MyName = 'mr, shuvo' // will get error

