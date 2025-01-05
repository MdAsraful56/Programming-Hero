function discountPrice(quantity) {
    let total = 0;
    if (quantity <= 100) {
        const total = quantity * 100;
        return total;
    }
    else if (quantity <= 200) {
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 70;
        return total;
    }
    return total;
}

console.log(discountPrice(200));
console.log(discountPrice(100));
console.log(discountPrice(300));