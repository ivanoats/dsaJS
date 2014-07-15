'use strict';

var WeightedQuickUnion = function( listSize ) {
  this.count = listSize;
  this.id    = new Array(listSize); // or just [] a la Crockford
  var i;
  for (i = 0; i < listSize; i++) {
    this.id[i] = i;
  }
  this.size = []; // or new Array(listSize)
  for(i = 0; i < listSize; i++) {
    this.size[i] = 1;
  }
};

// unnecessary in JavaScript because no private properties
// (unless you use a closure constructor)
//WeightedQuickUnion.prototype.getId = function() {
//  return this.id;
//};

//WeightedQuickUnion.prototype.count = function() {
//  return this.count;
//};

WeightedQuickUnion.prototype.connected = function(p,q) {
  return this.find(p) === this.find(q);
};

WeightedQuickUnion.prototype.find = function(p) {
  while ( p !== this.id[p] ) {
    p = this.id[p];
  }
  return p;
};

WeightedQuickUnion.prototype.union = function(p, q) {
  var i = this.find(p);
  var j = this.find(q);
  if (i === j) { return; }
  if (this.size[i] < this.size[j] ) {
    this.id[i] = j;
    this.size[j] += this.size[i];
  } else {
    this.id[j] = i;
    this.size[i] += this.size[j];
  }
  this.count--;
};

module.exports = WeightedQuickUnion;
