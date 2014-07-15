'use strict';

window.d3 = require('d3');
var WeightedQuickUnion = require('../lib/WeightedQuickUnion');

var width  = 1024,
    height = 1024,
    svg    = d3.select('#graph')
               .append('svg')
               .attr({width: width, height: height});
