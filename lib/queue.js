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

module.exports = Queue;
