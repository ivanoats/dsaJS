'use strict';
/** @module LinkedListStack */

/**
 * Represents a Stack implented with a LinkedList
 * @constructor
 */
var LinkedListStack = function() {

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
LinkedListStack.prototype.isEmpty = function() {
  return (this._first === null);
};

/**
 * adds an item to the top of the stack
 * @param item - an item to put on the stack, e.g. a string
 */
LinkedListStack.prototype.push = function(item) {
  var oldfirst = this._first;
  this._first = new this._Node(item);
  this._first.next = oldfirst;

};

/**
 * removes an item from the top of the stack
 * @returns an item, e.g. a string
 */
LinkedListStack.prototype.pop = function() {
  if (this.isEmpty()) {
    throw new Error('Stack is empty');
  }
  var item = this._first.item;
  this._first  = this._first.next;
  return item;
};

/**
 * finds an item in the stack
 * @returns { _Node } a node
 */
LinkedListStack.prototype.find = function(item) {
  if (this.isEmpty()) { throw new Error('Stack is empty'); }
  var currentNode = this._first;
  while(currentNode.item != item) {
    currentNode = currentNode.next;
    if (!currentNode) { return undefined; }
  }
  return currentNode;

};

/*
 * @returns a string representation of the stack
 */
LinkedListStack.prototype.display = function() {
  if (this.isEmpty()) { throw new Error('Stack is empty'); }
  var returnString = '';
  var currentNode = this._first;
  returnString += currentNode.item + '\n';
  while(currentNode.next) {
    returnString += currentNode.next.item + '\n';
    currentNode = currentNode.next;
  }
  return returnString;
};

/**
* insert a new node after an item
* @param newElement the data for the new node
* @param item the item to instert the new node after
*/
LinkedListStack.prototype.insert = function(newElement, item) {
  var newNode = new this._Node(newElement);
  var current = this.find(item);
  if (current === undefined ) { throw new Error('cannot find that item'); }
  newNode.next = current.next;
  current.next = newNode;
};

/**
* determine if it is a palindrome
*/
LinkedListStack.prototype.isPalindrome = function() {
  var slow = this._first;
  var fast = this._first;
  var stack = [];

  while(fast && fast.next) {
    stack.push(slow.item);
    slow = slow.next;
    fast = fast.next.next;
  }

  while(slow) {
    if (fast) slow = slow.next;
    if (slow.item != stack.pop() ) { return false; }
    slow = slow.next;
  }

  return true;

};

module.exports = LinkedListStack;
