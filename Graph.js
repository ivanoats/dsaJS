'use strict';

var Vertex = function(label) {
  this.label = label;
};

var Graph = function(v) {
  this.vertices    = v;
  this.edges       = 0;
  this.adjacencies = [];
  var i;
  for (i = 0; i < this.vertices; ++i ) {
    this.adjacencies[i] = [];
    this.adjacencies[i].push('');
  }
};

Graph.prototype.addEdge = function(from,to) {
  this.adjacencies[from].push(to);
  this.adjacencies[to].push(from);
};

Graph.prototype.showGraph = function() {
  var i,j;
  for (i = 0; i < this.vertices; ++i) {
    console.log(i + ' ->');
    for (j = 0; j < this.vertices; ++j) {
      if (this.adjacencies[i][j] !== undefined) {
        console.log(this.adjacencies[i][j] + ' ');
      }
    }
    console.log('\n');
  }
};

module.exports.Vertex = Vertex;
module.exports.Graph  = Graph;
