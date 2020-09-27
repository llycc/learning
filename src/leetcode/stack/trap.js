/**
 * 42. 接雨水
 * https://leetcode-cn.com/problems/trapping-rain-water/
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let sum = 0, current = 0;
  const stack = [];
  while(current < height.length) {
    while(stack.length > 0 && height[current]> height[stack[stack.length -1]]) {
      const topIndex = stack.pop();
      if (stack.length === 0) {
        break;
      }
      const len = current - stack[stack.length - 1] - 1;
      const deep = Math.min(height[stack[stack.length - 1]], height[current]);
      sum += len * (deep - height[topIndex]);
    }
    stack.push(current);
    current++;
  }
  return sum;
};
