'use strict';
/** @module BST */

/**
* Represents a Binary Search Tree
* @constructor
*/
var BST = function() {
  this.root = null;
  /**
  * Node represents a node in the binary search tree
  * @constructor
  * @param data - the value
  * @param left - left side
  * @param right - right side
  */
  this._Node = function(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  };
};

/**
* Inserts a new node into the Binary Search Tree (BST)
*/
BST.prototype.insert = function(data) {
  var n = new this._Node(data, null, null);
  if (this.root === null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
};

/**
* Performs an in-order traversal of the BST
* @param node where to start
* @return a string representing which nodes were visited
*/
BST.prototype.inOrder = function(node, currentResult) {
  var result = currentResult || '';
  if (node !== null) {
    this.inOrder(node.left, result);
    result += node.data + ' ';
    this.inOrder(node.right, result);
  }
  console.log('result is:' + result);
  return result;
};

module.exports = BST;