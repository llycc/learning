/**
 * 739. 每日温度
 * https://leetcode-cn.com/problems/daily-temperatures/
 *
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const stack = [];
  const result = [];

  for(let i = 0; i < T.length; i++) {
    let top = stack[stack.length - 1];

    while(stack.length !== 0 && T[i] > T[top]) {
      const lessIndex = stack.pop();
      result[lessIndex] = i - lessIndex;
      top = stack[stack.length - 1];
    }
    stack.push(i);
  }
  stack.forEach(index => {
    result[index] = 0;
  });
  return result;
};
