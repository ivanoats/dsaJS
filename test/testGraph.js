'use strict';
var Graph = require('./graph').Graph;

var g = new Graph(5);

g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
