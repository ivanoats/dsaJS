'use strict';
var parenFinder = function (){
  var parens = [];
  var expression = process.argv[2];
  var isOK = true;
  for(var i = 0; i < expression.length; i++){
    if (expression[i] === '('){
      parens.push(i);
    }
    if (expression[i] === ')'){
      if (parens.pop() === undefined){
        console.log('Found unmatched ")" at index ' + i);
        isOK = false;
      }
    }
  }
  while (parens.length > 0){
    console.log('Found unmatched "(" at index ' + parens.pop());
    isOK = false;
  }
  if (isOK){
    console.log('No unmatched parentheses');
  }
};
parenFinder();
