'use strict';

/** @module Graph */

/**
 * A vertex (point) of a Graph
 * @constructor
 */
var Vertex = function(label) {
  this.label = label;
};

/**
 * A graph with vertices and edges
 * @constructor
 * @param {Vertex} v - a vertex
 * @property {Integer} vertices - number of vertices
 * @property {Integer} edges
 * @property {Array} adjacencies - an adjacency matrix
 */
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
  var i,j,result='';
  for (i = 0; i < this.vertices; ++i) {
    result += i + ' ->';
    for (j = 0; j < this.vertices; ++j) {
      if (this.adjacencies[i][j] !== undefined) {
        result += this.adjacencies[i][j] + ' ';
      }
    }
    result += '\n';
  }
  return result;
};

module.exports.Vertex = Vertex;
module.exports.Graph  = Graph;
