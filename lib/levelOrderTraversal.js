var Queue = require('./queue');

var levelOrderTraversal = function(node) {
  var queue = new Queue;
  resultStr = '';
  if (node === null) {
    return "";
  }
  queue.enqueue(node)
  while(queue.length) {
    var current = queue.dequeue();
    if (current.left) {
      queue.enqueue(current.left)
    }
    if (current.right) {
      queue.enqueue(current.right)
    }
    resultStr += current.data
  }
  return resultStr;
}

module.exports = levelOrderTraversal;
