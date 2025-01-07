/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let BMI = 27;

if (BMI < 18.5) {
    console.log("You are UnderWeight");
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("You are Normal");
}
else if (BMI >= 25 && BMI <= 29.9) {
    console.log("You are Overweight");
}
else {
    console.log("You are Obese");
}