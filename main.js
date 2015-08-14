
function Vehicle(name, wheelCount, passengerCount, speed) {
    this.name = name;
    this.wheelCount = wheelCount;
    this.passengerCount = passengerCount;
    this.speed = speed;
    this.distance_travelled = 0;
    this.VIN = Math.round(Math.random()*1000000000);
    return this;
}

Vehicle.prototype.makeNoise = function() {
    console.log("make noise");
    return this;
};

Vehicle.prototype.move = function() {
    this.updateDistanceTravelled();
    this.makeNoise();
    return this;
};

Vehicle.prototype.checkMiles = function() {
    console.log(this.name + " travelled distance " + this.distance_travelled);
    return this;
};

Vehicle.prototype.updateDistanceTravelled = function() {
    this.distance_travelled += this.speed;
    return this;
};

Vehicle.prototype.getVIN = function () {
    return this.VIN;
};

/////////////////////////////////////////////////
var bike = new Vehicle("bike", 2, 1, 5);
bike.makeNoise = function() { return "ring ring"; };

bike.move();
bike.checkMiles();
// console.log(bike.name + " make noise " + bike.makeNoise());


/////////////////////////////////////////////////
var sedan = new Vehicle("sedan", 4, 4, 80);
sedan.makeNoise = function() { return "honk honk"; };

sedan.move();
sedan.move();
sedan.checkMiles();
// console.log(sedan.name + " make noise " + sedan.makeNoise());


/////////////////////////////////////////////////
var bus = new Vehicle("bus", 4, 90, 40);
bus.pickUpPassengerCount = 0;
bus.pickUpPassengers = function(passengers) {
    this.pickUpPassengerCount += passengers;
};
bus.pickUpPassengers(5);
bus.pickUpPassengers(2);
// console.log(bus.name + " pick up, so far, " + bus.pickUpPassengerCount);

bus.move();
bus.move();
bus.move();
bus.checkMiles();
