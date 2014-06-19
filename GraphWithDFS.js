'use strict';

var Vertex = function(label) {
  this.label = label;
};

var Graph = function(v) {
  this.vertices    = v;
  this.edges       = 0;
  this.adjacencies = [];
  this.marked      = [];
  this.edgeTo      = [];
  var i;
  for (i = 0; i < this.vertices; ++i ) {
    this.adjacencies[i] = [];
    this.adjacencies[i].push('');
    this.marked[i] = false;
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

Graph.prototype.dfs = function(v) {
  this.marked[v] = true;
  if (this.adjacencies[v] !== undefined ) {
    console.log('Visited vertex: ' + v);
  }
  this.adjacencies[v].forEach(function(w) {
    if (!this.marked[w] && w ) { this.dfs(w); }
  }, this);
};

Graph.prototype.bfs = function(s) {
  var queue = [];
  this.marked[s] = true;
  queue.push(s); // add to back of queue
  while (queue.length > 0) {
    var v = queue.shift(); // remove from front of queue
    if (v) {
      console.log('Visited vertex' + v);
    }
    if (this.adjacencies[v]  ) {
      this.adjacencies[v].forEach(function(w) {
        if (!this.marked[w]) {
          this.edgeTo[w] = v;
          this.marked[w] = true;
          queue.push(w);
        }
      }, this);
    }
  }
};

module.exports.Vertex = Vertex;
module.exports.Graph  = Graph;






