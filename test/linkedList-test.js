'use strict';

var expect = require('chai').expect;
var LinkedListStack = require('../lib/linkedListStack');

describe('Linked List Stack', function() {

  it('can instantiate a new linked list stack', function() {
    var lls = new LinkedListStack();
    expect(lls).to.be.an.instanceof(LinkedListStack);
  });

  it('tests for an empty list and returns true', function () {
    var lls = new LinkedListStack();
    expect(lls.isEmpty()).to.be.true;
  });

  it('can push an item and it is no longer empty', function() {
    var lls = new LinkedListStack();
    lls.push('foo');
    expect(lls.isEmpty()).to.be.false;
  });

  it('can pop items', function () {
    var lls = new LinkedListStack();
    lls.push('foo');
    expect(lls.pop()).to.be.equal('foo');
  });
});

