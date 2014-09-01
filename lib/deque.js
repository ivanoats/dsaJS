'use strict';

// Deque extension of Queue
var Deque = function() {};

Deque.prototype.cut = function(element) {
  this.dataStore.unshift(element);
};

Deque.prototype.iKnowTheDj = function() {
  return this.dataStore.pop();
};
