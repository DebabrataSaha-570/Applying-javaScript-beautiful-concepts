// function getFactorial(number) {
//     let fact = 1;
//     let i = 1;
//     while (i <= number) {
//         fact = fact * i;
//         i++;
//     }
//     return fact;
// }

// console.log(getFactorial(3))

// while loop reverse 

// function getFactorial(number) {
//     let fact = 1;
//     let i = number;
//     while (i >= 1) {
//         fact = fact * i;
//         i = i - 1;
//     }
//     return fact;
// }

// for loop reverse 

function getFactorial(number) {
    let fact = 1;
    let i = number;
    for (i; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}

console.log(getFactorial(5))