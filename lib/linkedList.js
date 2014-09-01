'use strict';

var LinkedList = function() {

  this._first = null;

  this.Node = {
    item: null,
    next: null
  };

};

LinkedList.prototype.isEmpty = function() {
  return (this._first === null);
};

module.exports = LinkedList;
