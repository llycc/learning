/**
 * 503. 下一个更大元素 II
 * https://leetcode-cn.com/problems/next-greater-element-ii/
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const len = nums.length * 2;
  const stack = [];
  const res = [];
  for(let i = len - 1; i > 0; i--) {
    const index = i % nums.length;
    while(stack.length > 0 && nums[index] >= stack[stack.length - 1]) {
      stack.pop();
    }
    res[index] = stack.length > 0 ? stack[stack.length - 1] : -1;
    stack.push(nums[index]);
  }
  return res;
};
