'use strict';

var rootPath = require('app-root-path');
var expect = require('chai').expect;
var BST = require(rootPath + '/lib/binaryTree');

describe('BST', function() {

  var bst;

  beforeEach(function() {
    bst = new BST();
  });

  it('can instantiate a new BST', function() {
    expect(bst).to.be.an.instanceof(BST);
  });

  it('can insert a node', function () {
    bst.insert('5');
    expect(bst.root).to.have.property('data');
  });
  
  it('can perform an in-order traversal', function() {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(1);
    bst.insert(8);
    expect(bst.inOrder(bst.root)).to.equal('1 3 5 7 8 ');
  });
});
