function reversePolishNotation(expression) {
  let expressionToArray = expression.split(" ");
  console.log(expressionToArray);
  let output = [];
  let stack = [];
  const operatorPriority = {
    "^": 4,
    "*": 3,
    "/": 3,
    "+": 2,
    "-": 2,
    "(": 1,
  };

  function topValue(list) {
    if (typeof list != "undefined") {
      return list[list.length - 1];
    } else {
      return null;
    }
  }

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  for (let i = 0; i < expressionToArray.length; i++) {
    if (isNumeric(expressionToArray[i])) {
      // character is a number
      output.push(expressionToArray[i]);
      // console.log(output);
    } else if (expressionToArray[i] === "(") {
      // character is left bracket
      stack.push(expressionToArray[i]);
      // console.log(stack);
    } else if (expressionToArray[i] === ")") {
      // character is right bracket
      while (topValue(stack) !== "(") {
        output.push(stack.pop());
      }
      stack.pop();
    } else {
      // character is operator
      if (stack.length === 0) {
        stack.push(expressionToArray[i]);
      } else {
        if (
          operatorPriority[topValue(stack)] <
          operatorPriority[expressionToArray[i]]
        ) {
          stack.push(expressionToArray[i]);
        } else {
          while (
            stack.length !== 0 &&
            operatorPriority[topValue(stack)] >=
              operatorPriority[expressionToArray[i]]
          ) {
            output.push(stack.pop());
          }
          stack.push(expressionToArray[i]);
        }
      }
    }
  }

  while (stack.length !== 0) {
    output.push(stack.pop());
  }

  return output.toString();
}

module.exports = reversePolishNotation;
