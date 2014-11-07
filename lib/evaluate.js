'use strict';
var _ = require('underscore');

module.exports = function(expr) {
  var operands = [];
  var values   = [];
  var exprArr = expr.split(' ');
  var s, op, result;

  while(!_.isEmpty(exprArr)) {
    s = exprArr.shift();
    if (s === '(') {}
    else if (s === '+') { operands.push(s); }
    else if (s === '*') { operands.push(s); }
    else if (s === ')') {
      op = operands.pop();
      if (op === '+') {
        result = values.pop() + values.pop();
        values.push( result );
      }
      else if (op === '*') {
        result = values.pop() * values.pop();
        values.push( result );
      }
    }
    else { values.push(Number(s)); }
  }
  return values.pop();
};

