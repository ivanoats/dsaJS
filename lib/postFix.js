'use strict';

function PostfixExpression(operand1, operand2, operator) {
  this.operand1 = operand1;
  this.operand2 = operand2;
  this.operator = operator;
}

PostfixExpression.prototype.inspect = function() {
  return this.operand1 + ' ' + this.operand2 + ' ' + this.operator;
};

// takes for example "2 + 2"
PostfixExpression.prototype.parseInfix = function(string) {
  var infixArray =  string.split(' ');
  this.operand1  = infixArray[0];
  this.operand2  = infixArray[2];
  this.operator  = infixArray[1];
};

var postFix = new PostfixExpression();
postFix.parseInfix('2 + 3');

console.log(postFix.inspect());
