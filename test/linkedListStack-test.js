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

  it('errors when popping an empty list',function() {
    var lls = new LinkedListStack();
    expect(function(){lls.pop();}).to.throw(/is empty/);
  });

  it('can find a node',function() {
    var lls = new LinkedListStack();
    lls.push('a'); lls.push('b'); lls.push('c');
    expect(lls.find('c')).to.have.property('item');
    expect(lls.find('c').item).to.equal('c');
  });

  it('can display the linked list', function() {
    var lls = new LinkedListStack();
    lls.push('a'); lls.push('b'); lls.push('c');
    expect(lls.display()).to.equal('c\nb\na\n');
  });

  it('errors when finding on an empty list', function() {
    var lls = new LinkedListStack();
    expect(function(){lls.find('item');}).to.throw(/is empty/);
  });

  it('can insert a new node after an item', function() {
    var lls = new LinkedListStack();
    lls.push('a'); lls.push('b'); lls.push('c');
    lls.insert('b and a half','c');
    expect(lls.display()).to.equal('c\nb and a half\nb\na\n');
  });

  it('can remove a node');

});

