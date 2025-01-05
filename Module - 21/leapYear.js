function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isLeapYear(2012));


function isLeapYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    } 
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLeapYear2(2052));