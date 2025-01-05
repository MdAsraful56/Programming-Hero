function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
console.log(inchToFeet(75));



function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feet = parseInt(feetFraction);
    const inchFraction = inch % 12;
    return `${feet} ft ${inchFraction} inch.`
}
console.log(inchToFeet2(75));


