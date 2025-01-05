function calculateMoney(count) {
    if (count > 0) {
        const price = 120;
        let coust = 500 + (8 * 50);
        // console.log(coust);
        let earn = price * count;
        // console.log(earn);
        let total = earn - coust;
        return total;
    } else {
        return 'Input a Right Number';
    }
}

console.log(calculateMoney(123));
console.log(calculateMoney(100));
console.log(calculateMoney(-10));