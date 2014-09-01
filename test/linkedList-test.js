'use strict';

var expect = require('chai').expect;
var LinkedList = require('../lib/linkedList');

describe('Linked List', function() {

  it('can instantiate a new linked list', function() {
    var ll = new LinkedList();
    expect(ll).to.be.an.instanceof(LinkedList);
  });

  it('tests for an empty list and returns true', function () {
    var ll = new LinkedList();
    expect(ll.isEmpty()).to.be.true;
  });
});

