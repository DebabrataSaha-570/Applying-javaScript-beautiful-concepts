function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2100;
const isMyYearLeapYear = isLeapYear(myYear)
console.log('is this year leap year ?', isMyYearLeapYear)


// leap year correct function 

function checkLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    } else {
        return false;
    }
}

const year = checkLeapYear(myYear)
console.log('is this year leap year? ', year)