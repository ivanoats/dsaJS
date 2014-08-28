'use strict';

window.d3 = require('d3');

var graphDiv = document.getElementById("graph");
var width  = graphDiv.clientWidth - 50,
    height = innerHeight / 2 // page height
window.svg    = d3.select('#graph')
               .append('svg')
               .attr({width: width, height: height});

var wordNodes = ["inclusive",
  "approachable",
  "trust",
  "humility",
  "practical",
  "dynamic",
  "community",
  "supportive",
  "upbeat",
  "positive",
  "reflective",
  "geek culture",
  "always learning",
  "agile"
];

var wordEdges = [];

wordNodes.forEach(function(n){
  wordNodes.forEach(function(n2){
    wordEdges.push({source: indexOf(n), target: indexOf(n2)});
  });
});

console.dir(wordEdges);

window.dataset = {
  nodes: wordNodes,
  edges: wordEdges
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
