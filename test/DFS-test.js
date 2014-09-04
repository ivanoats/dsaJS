/*jshint expr: true*/
'use strict';

var rootPath = require('app-root-path');
var expect = require('chai').expect;
var Graph = require(rootPath + '/lib/GraphWithDFS.js').Graph;

describe('Graph', function() {
  it('can depth first search graph', function() {
    var g = new Graph(10);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(3, 6);
    g.addEdge(1, 3);
    g.addEdge(2, 4);
    g.addEdge(4, 5);
    g.addEdge(4, 7);
    g.addEdge(0, 8);
    g.addEdge(8, 9);
    g.showGraph();
    g.dfs(0);
  });

  it('can breadth first search graph', function() {
    var g2 = new Graph(8);
    g2.addEdge(0, 1);
    g2.addEdge(0, 2);
    g2.addEdge(1, 3);
    g2.addEdge(2, 4);
    g2.addEdge(3, 5);
    g2.addEdge(2, 6);
    g2.addEdge(6, 7);
    g2.showGraph();
    g2.bfs(0);
  });
});

