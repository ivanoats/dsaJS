'use strict';

var LinkedListStack = function() {

  this._first = null;

  // constructor for inner class
  this._Node = function(item) {
    this.item = item;
    this.next = null;
  };

};

LinkedListStack.prototype.isEmpty = function() {
  return (this._first === null);
};

LinkedListStack.prototype.push = function(item) {
  var oldfirst = this._first;
  this._first = new this._Node(item);
  this._first.next = oldfirst;

};

LinkedListStack.prototype.pop = function() {
  var item = this._first.item;
  this._first  = this._first.next;
  return item;
};

module.exports = LinkedListStack;
