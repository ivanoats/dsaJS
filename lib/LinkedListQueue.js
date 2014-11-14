'use strict';
/** @module LinkedListQueue */

/**
 * Represents a Queue implented with a LinkedList
 * @constructor
 */
var LinkedListQueue = function() {

  this._first = null;

/**
 * Node represents a node in the linked list
 * @constructor
 * @param item - the item to put on the stack, e.g. a string
 * @property item - the item to put on the stack, e.g. a string
 * @property next - a link to the next item in the stack
 */
  this._Node = function(item) {
    this.item = item;
    this.next = null;
  };

};

/**
 * @returns {Boolean} whether the stack is empty or not
 */
LinkedListQueue.prototype.isEmpty = function() {
  return (this._first === null);
};

LinkedListQueue.prototype.enqueue = function (element) {
};

LinkedListQueue.prototype.dequeue = function () {
};

LinkedListQueue.prototype.toString = function () {
};

LinkedListQueue.prototype.length = function() {
};

LinkedListQueue.prototype.isEmpty = function() {
};

LinkedListQueue.prototype.hasNext = function() {
};

module.exports = LinkedListQueue;

