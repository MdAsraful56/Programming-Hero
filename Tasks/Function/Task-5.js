// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd


function odd_even(numbers) {
    for (const number of numbers) {
        console.log(number);
        if (number % 2 === 0) {
            return 'even';
        } else {
            return 'odd';
        }
    }
    
}

const arrayNumber = [12,23,34,56,78,33,55,99];
console.log(odd_even(arrayNumber))