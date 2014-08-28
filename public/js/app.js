'use strict';

window.d3 = require('d3');
var WeightedQuickUnion = require('../../lib/WeightedQuickUnion');

var graphDiv = document.getElementById("graph");
var width  = graphDiv.clientWidth - 50,
    height = innerHeight / 2 // page height
window.svg    = d3.select('#graph')
               .append('svg')
               .attr({width: width, height: height});

var wqu = new WeightedQuickUnion(25);

// Visualize WQU with https://github.com/mbostock/d3/wiki/Tree-Layout
// connect a site, revisualize
var edges = [];
var wquNodes = wqu.id.map(function(element){
  return {value: element};
});

window.dataset = {
  nodes: wquNodes,
  edges: edges
};

// force layout?
var colors = d3.scale.category10();

var force = d3.layout.force()
                     .nodes(dataset.nodes)
                     .links(dataset.edges)
                     .linkDistance([50])
                     .charge([-75])
                     .gravity(0.1)
                     .size([width,height])
                     .start();

var edges = svg.selectAll('line')
               .data(dataset.edges)
               .enter()
               .append('line')
               .style('stroke', '#ccc')
               .style('stroke-width', 4);

var nodes = svg.selectAll('circle')
  .data(dataset.nodes)
  .enter()
  .append('circle')
  .attr('r', 10)
  .style('fill', function(d, i) {
    return colors(i);
  })
  .call(force.drag);

var labels = svg.selectAll('text')
                .data(dataset.nodes)
                .enter()
                .append('text')
                .attr('id', 'tooltip')
                .attr('font-family', 'sans-serif')
                .attr('font-size', '11px')
                .attr('font-weight', 'bold')
                .attr('fill', 'black')
                .text(function(d) { return d.value;} );

force.on('tick', function() {
  edges.attr('x1', function(d) { return d.source.x; })
       .attr('y1', function(d) { return d.source.y; })
       .attr('x2', function(d) { return d.target.x; })
       .attr('y2', function(d) { return d.target.y; });

  nodes.attr('cx', function(d) { return d.x; })
       .attr('cy', function(d) { return d.y; });

  labels.attr('transform', function(d) { return 'translate(' +  (d.x + 10) +  ',' + d.y + ')'; } );

});
