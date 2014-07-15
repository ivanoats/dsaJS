/* jshint node:true */
'use strict';

var Percolation = function(gridSize) {
  if (gridSize > (Number.MAX_SAFE_INTEGER / 2) ) {
    throw "Index out of bounds: Grid size must be less than " + (Number.MAX_SAFE_INTEGER / 2);
  }
  this.gridSize = gridSize;
  var gridSquared = gridSize * gridSize;
  this.open = [];
  for(var i = 0; i < gridSquared; i++ ) {
    this.open[i] = false;
  }
  this.percolation = new WeightedQuickUnion(gridSquared + 2)
  this.top = undefined;
  this.bottom = undefined;
  

};

Percolation.prototype.getGrid = function() {
  return this.grid;
};

var p = new Percolation(6);
console.dir(p.grid);
