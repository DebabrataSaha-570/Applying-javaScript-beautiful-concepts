
// factorial while loop funtion 

function getFactorial1(number) {
    let fact = 1;
    let i = 1;
    while (i <= number) {
        fact = fact * i;
        i++;
    }
    return fact;
}
console.log(getFactorial1(3))
console.log(getFactorial1(6))

// factorial while loop reverse 
function getFactorial2(number) {
    let fact = 1;
    let i = number;
    while (i >= 1) {
        fact = fact * i;
        i--;
    }
    return fact;
}
console.log(getFactorial2(3));
console.log(getFactorial2(6));


// factorial for loop reverse 
function getFactorial3(number) {
    let fact = 1;
    for (i = number; i >= 1; i--) {
        fact = fact * i;

    }
    return fact;
}
console.log(getFactorial3(3));
console.log(getFactorial3(6));

