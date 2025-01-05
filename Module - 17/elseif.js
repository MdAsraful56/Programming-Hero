var age = 61;
const price = 500;

if (age < 12) {
    console.log("You can go free");
}
else if (age > 60) {
    const des = price * 50 / 100;
    var payAmount = price - des;
    console.log(payAmount);
}
else {
    console.log(price)
}