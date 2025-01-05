function discountPrice(quantity) {
    let total = 0;

    const first100 = 100;
    const second100 = 90;
    const other = 70;

    if (quantity <= 100) {
        const total = quantity * first100;
        return total;
    }
    else if (quantity <= 200) {
        const first100Total = 100 * first100;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100;
        const total = first100Total + remainingTotal;
        return total;
    }
    else {
        const first100Total = 100 * first100;
        const second100Total = 100 * second100;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * other;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}

console.log(discountPrice(300));