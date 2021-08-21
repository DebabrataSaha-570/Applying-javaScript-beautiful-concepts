function isEven(number) {
    if (number % 2 == 0) {
        return true
    }
    else {
        return false
    }
}

var myMotherNumber = 23434;
var isEvenNumber = isEven(myMotherNumber)
console.log('is my mother number even? ', isEvenNumber)


function isOdd(number) {
    if (number % 2 != 0) {
        return true
    }
    else {
        return false
    }
}

var myMotherInLawNumber = 2323899;
var isOddNumber = isOdd(myMotherInLawNumber)
console.log('is my mother in law number odd? ', isOddNumber)
