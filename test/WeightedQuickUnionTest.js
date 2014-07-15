/*jshint -W030 */

'use strict';
var should             = require('chai').should();
var WeightedQuickUnion = require('../lib/WeightedQuickUnion');

describe('WeightedQuickUnion', function() {
  it('can instantiate a new WQU', function() {
    var wqu = new WeightedQuickUnion(10);
    wqu.should.exist;
  });
  it('can create a connection (union) between two sites', function() {
    var wqu = new WeightedQuickUnion(10);
    wqu.union(1,2);
    console.dir(wqu);
    wqu.connected(1,2).should.be.true; //jshint ignore:line
  });
});
