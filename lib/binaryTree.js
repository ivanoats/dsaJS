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

BST.prototype.remove = function(data) {
  this.root = this._removeNode(this.root, data);
};

BST.prototype._removeNode = function(node, data) {
  if (node === null) { return null; }
  if (data == node.data) {

    // node has no children
    if (node.left === null && node.right === null) { return null; }

    // node has no left child
    if (node.left === null) { return node.right; }

    // node has no right child
    if (node.right === null) { return node.left; }

    // node has two children
    var tempNode = this._getSmallest(node.right);
    node.data = tempNode.data;
    node.right = this.removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = this._removeNode(node.left, data);
    return node;
  } else {
    node.right = this._removeNode(node.right, data);
    return node;
  }
};

BST.prototype._getSmallest = function(node) {
  var current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
};

/**
* Performs an in-order traversal of the BST
* @param node where to start
* @return a string representing which nodes were visited
*/
BST.prototype.inOrder = function(node) {
  var result = '';
  if (node !== null) {
    result += this.inOrder(node.left);
    result += node.data + ' ';
    result += this.inOrder(node.right);
  }
  return result;
};

BST.prototype.preOrder = function(node) {
  var result = '';
  if (node !== null) {
    result += node.data + ' ';
    result += this.preOrder(node.left);
    result += this.preOrder(node.right);
  }
  return result;
};

BST.prototype.postOrder = function(node) {
  var result = '';
  if (node !== null) {
    result += this.preOrder(node.left);
    result += this.preOrder(node.right);
    result += node.data + ' ';
  }
  return result;
};

module.exports = BST;
