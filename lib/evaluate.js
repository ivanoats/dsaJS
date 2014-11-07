'use strict';
var _ = require('underscore');

module.exports = function(expr) {
  var operands = [];
  var values   = [];
  var exprArr = expr.split(' ');
  var s, op, result;

  while(!_.isEmpty(exprArr)) {
    s = exprArr.shift();
    if (s === '(') { console.log('skipping (' ); }
    else if (s === '+') { operands.push(s); }
    else if (s === '*') { operands.push(s); }
    else if (s === ')') {
      console.log('handling )');
      op = operands.pop();
      console.log('I just popped a ',op);
      if (op === '+') {
        console.log('found a +');
        result = values.pop() + values.pop();
        console.log('result of + was ', result);
        values.push( result );
        console.log('our values are now',values);
      }
      else if (op === '*') {
        console.log('found a *');
        result = values.pop() * values.pop();
        console.log('result of * was ', result);
        values.push( result );
      }
    }
    else { values.push(Number(s)); }
  }
  return values.pop();
};

