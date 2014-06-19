'use strict';

function Queue() {
  this.dataStore = [];
}

Queue.prototype.enqueue = function (element) {
  this.dataStore.push(element);
};

Queue.prototype.dequeue = function () {
  return this.dataStore.shift();
};

Queue.prototype.toString = function () {
  return this.dataStore.join('\n');
};

// Deque extension of Queue
var Deque = function() {};

Deque.prototype.cut = function(element) {
  this.dataStore.unshift(element);
};

Deque.prototype.iKnowTheDj = function() {
  return this.dataStore.pop();
};

// Testing
var shittyLine = new Deque();
shittyLine.enqueue('Dippy');
shittyLine.enqueue('Sprinkles');
shittyLine.enqueue('Happy');
console.log(shittyLine.toString());
shittyLine.dequeue();
console.log(shittyLine.toString());
shittyLine.cut('Bozo');
console.log(shittyLine.toString());
shittyLine.iKnowTheDj();
console.log(shittyLine.toString());

// Why?
console.log('------------------------');
var testing = new Deque();
console.log('WTF');
console.log(testing.toString());

// Output:
// Bozo
// Sprinkles

