/*
1! = 1;
2! = 2 * 1;
3! = 3 * 2 * 1;
4! = 4 * 3 * 2 * 1;
5! = 5 * 4 * 3 * 2 * 1
6! = 6 * 5 * 4 * 3 * 2 * 1
7! = 7 * 6 * 5 * 4 * 3 * 2 * 1
n! = n * (n-1)!
*/

function factorialRecursive(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}
const myFactorial = factorialRecursive(7);
console.log(myFactorial)

