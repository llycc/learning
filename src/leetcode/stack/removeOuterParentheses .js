/**
 * 1021. 删除最外层的括号
 * https://leetcode-cn.com/problems/remove-outermost-parentheses/
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  const stack = [];
  const result = [];

  for(let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      stack.push(i);
    }
    if(S[i] !== ')') {
      continue;
    }
    const start = stack.pop();
    if (stack.length === 0) {
      result.push(S.slice(start + 1, i));
    }
  }
  return result.join('');
};
