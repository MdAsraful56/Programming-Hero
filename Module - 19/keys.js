const computer = {
    brand: 'lenovo',
    price: 120000,
    isNew: true,
    ssd: '512GB',
    Ram: {
        old: '4GB',
        new: {
            sstd: "4+4 GB",
            isRGB: true,
        }
    }
}

console.log(computer.Ram.new.isRGB);





const keys = Object.keys(computer);
console.log(keys);

const values = Object.values(computer);
console.log(values);


