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


for(const pops in computer){
    console.log(pops);
    console.log(computer[pops]);
}




const keys = Object.keys(computer);
console.log(keys);

for(const key of keys){
    console.log(key, ":" , computer[key]);
}

console.log(Object.create({}));