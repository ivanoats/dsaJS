/*jshint expr: true*/
'use strict';

var rootPath = require('app-root-path');
var expect   = require('chai').expect;
var evaluate = require(rootPath + '/lib/evaluate');

describe('Evaluate', function() {
  it('evaluates an arithmatic expression separated by spaces with only * and +', function() {
    var expr = '( ( 1 + 2 ) * ( 3 + 4 ) )';
    expect(evaluate(expr)).to.equal(21);
  });
});
