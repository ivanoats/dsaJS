/*jshint multistr: true */
/*jshint expr: true*/
'use strict';

var rootPath = require('app-root-path');
var expect = require('chai').expect;
var parenFinder = require(rootPath + '/lib/parenFinder');

describe('ParenFinder', function(){
  it('finds an unmatched )',function() {
    var expr = '(3 + 4) - (2 - 3';
    expect(parenFinder(expr)).to.equal('Found unmatched "(" at index ' + 10);
  });

  it('finds an unmatched (',function() {
    var expr = '3 + 4) - (2 - 3)';
    expect(parenFinder(expr)).to.equal('Found unmatched ")" at index ' + 5);
  });

  it('finds when there are no unmatched parens', function() {
    var expr = '(3 + 4) - (2 - 3)';
    expect(parenFinder(expr)).to.equal('No unmatched parentheses');
  });
});
