'use strict';
module.exports = function parenFinder(expression) {
  var parens = [];
  var resultExpr = '';
  var isOK = true;

  for(var i = 0; i < expression.length; i++){
    if (expression[i] === '('){
      parens.push(i);
    }
    if (expression[i] === ')'){
      if (parens.pop() === undefined){
        resultExpr += 'Found unmatched ")" at index ' + i;
        isOK = false;
      }
    }
  }
  while (parens.length > 0){
    resultExpr += 'Found unmatched "(" at index ' + parens.pop();
    isOK = false;
  }
  if (isOK){
    resultExpr = 'No unmatched parentheses';
  }

  return resultExpr;
};
