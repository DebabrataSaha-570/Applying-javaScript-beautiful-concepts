// var factorial = 1;
// for (i = 1; i <= 3; i++) {
//     factorial = factorial * i;
//     console.log(factorial)
// }

function factorial(number) {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact = fact * i;

    }
    return fact;
}

console.log(factorial(5))
console.log(factorial(6))
