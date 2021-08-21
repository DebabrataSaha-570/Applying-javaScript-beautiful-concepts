/*
 3! = 3 * 2 * 1;
4! = 4 * 3 * 2 * 1;
5! = 5 * 4 * 3 * 2 * 1
6! = 6 * 5 * 4 * 3 * 2 * 1
7! = 7 * 6 * 5 * 4 * 3 * 2 * 1
*/

var i = 1;
var factorial = 1
while (i <= 7) {
    factorial = factorial * i
    console.log(factorial)
    i += 1;
}

var factorial = 1;
for (i = 1; i <= 7; i++) {
    console.log(i);
    // var factorial = 1;
    factorial = factorial * i;
    console.log(factorial)
}