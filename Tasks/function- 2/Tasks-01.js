// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.


function Converts(temperature) {
    // console.log(temperature);
    // {(n * 9 / 5) + 32}
    let Celsius = temperature;
    let Fahrenheit = ((temperature * 9 / 5) + 32);
    return Fahrenheit;

}

console.log(Converts(50));