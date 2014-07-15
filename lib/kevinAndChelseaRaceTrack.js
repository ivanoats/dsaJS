'use strict';

var Track = function Track() {
  this.count = 0;
  this.first = null;
  this.currentCar = null;
};

Track.prototype.addCar = function(car) {
  if (!this.first) {
    this.first = car;
    this.currentCar = car;
  } else {
    this.currentCar = this.first;
    while (this.currentCar.next) {
      this.currentCar = this.currentCar.next;
    }
    this.currentCar.next = car;
  }
  this.count++;
  console.dir(this.currentCar);
};

Track.prototype.pitCar = function(driver) {
  this.currentCar = this.first;
  while (this.currentCar.driver !== driver) {
    this.currentCar = this.currentCar.next;
  }
  this.currentCar.next = this.currentCar.next.next;
  this.count--;
};

var Car = function(driver) {
  this.driver = driver;
  this.next = null;
};

var myTrack = new Track();
myTrack.addCar(new Car('Driver 1'));
myTrack.addCar(new Car('Driver 2'));
console.log(myTrack.count);
console.dir(myTrack);
myTrack.pitCar('Driver 1');
console.log(myTrack.count);
console.dir(myTrack);
