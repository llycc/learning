/**
 * 224. 基本计算器
 * https://leetcode-cn.com/problems/basic-calculator/
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = `(${s})`;
  const stack = [];
  let startIndex = -1, prevIndex = 0;
  for(let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (char === ' ') {
      continue;
    }
    if (!isNaN(Number(char)) && isNaN(Number(s[prevIndex]))) {
      startIndex = i;
    }
    if (isNaN(Number(char)) && !isNaN(Number(s[prevIndex]))) {
      stack.push(s.slice(startIndex, i));
    }
    prevIndex = i;
    if (!isNaN(Number(char))) {
      continue;
    }

    let stackTop, params = [];
    while(char === ')' && stack.length > 0) {
      stackTop = stack.pop();
      if (stackTop === '(') {
        break;
      }
      params.push(stackTop);
    }
    if (params.length === 0) {
      stack.push(char);
      continue;
    }

    let result = 0, operator;
    for(let i = params.length - 1; i >=0; i--) {
      if(params[i] === '-' || params[i] === '+') {
        operator = params[i];
      } else {
        result += Number(params[i]) * (operator === '-' ? -1 : 1);
        operator = undefined;
      }
    }
    stack.push(result)
  }
  return stack.pop();
};
