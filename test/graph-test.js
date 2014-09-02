'use strict';

var rootPath = require('app-root-path');
var expect = require('chai').expect;
var Graph = require(rootPath + '/lib/graph').Graph;

describe('Graph', function() {
  it('can make a new graph with a specific number of vertices', function() {
    var g = new Graph(5);
    expect(g.vertices).to.equal(5);
  });

  it('can add an edge',function() {
    var g = new Graph(5);
    g.addEdge(0,1);
    expect(g.adjacencies[0].pop()).to.equal(1);
  });

  it('can add a few edges',function() {
    var g = new Graph(5);
    g.addEdge(0,1);
    g.addEdge(0,2);
    g.addEdge(1,3);
    g.addEdge(2,4);
    expect(g.adjacencies[0].pop()).to.equal(2);
    expect(g.adjacencies[0].pop()).to.equal(1);
    expect(g.adjacencies[1].pop()).to.equal(3);
    expect(g.adjacencies[2].pop()).to.equal(4);
  });

  it('can show a graph', function() {
    var g = new Graph(5);
    g.addEdge(0,1);
    g.addEdge(0,2);
    g.addEdge(1,3);
    g.addEdge(2,4);
    expect(g.showGraph()).to.equal('0 -> 1 2 \n1 -> 0 3 \n2 -> 0 4 \n3 -> 1 \n4 -> 2 \n');
  });
});
