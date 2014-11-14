'use strict';

var Queue = function() {
  this.dataStore = [];
};

Queue.prototype.enqueue = function (element) {
  this.dataStore.push(element);
};

Queue.prototype.dequeue = function () {
  return this.dataStore.shift();
};

Queue.prototype.toString = function () {
  return this.dataStore.join('\n');
};

Queue.prototype.length = function() {
  return this.dataStore.length;
}

Queue.prototype.isEmpty = function() {
  return (this.dataStore.length === 0);
}

Queue.prototype.hasNext = function() {
  return (this.dataStore.length > 0);
}

module.exports = Queue;
