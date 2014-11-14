'use strict';

var rootPath = require('app-root-path');
var expect = require('chai').expect;
var BST = require(rootPath + '/lib/binaryTree');
var levelOrderTraversal = require(rootPath + '/lib/levelOrderTraversal');

describe('levelOrderTraversal', function() {

  var bst = new BST();

  it('can do a levelOrderTraversal', function() {
    bst.insert(9);
    bst.insert(5);
    bst.insert(13);
    bst.insert(3);
    bst.insert(6);
    bst.insert(11);
    bst.insert(15);
    expect(levelOrderTraversal(bst.root).to.equal('9\n5\n13\n3\n6\n11\n15\n'));
  });
});
