class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
}

class Bus extends Vehicle {
    constructor(name, price, seat, ticketPrice) {
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}


class Truck extends Vehicle{
    constructor(name, price, capacity, fuel) {
        super(name, price);
        this.capacity = capacity;
        this.fuel = fuel;
    }
}