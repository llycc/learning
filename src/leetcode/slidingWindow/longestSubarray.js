/**
 * 1438. 绝对差不超过限制的最长连续子数组
 * https://leetcode-cn.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  if (nums.length === 1) {
    return 1;
  }
  let i = 0, j = 0, maxLen = 0;
  const riseStack = [Infinity];
  const downStack = [-Infinity];
  while(j < nums.length) {

    while(riseStack[riseStack.length - 1] > nums[j]) {
      riseStack.pop();
    }
    while(downStack[downStack.length - 1] < nums[j]) {
      downStack.pop();
    }
    riseStack.push(nums[j]);
    downStack.push(nums[j]);
    while(riseStack[0] + limit < downStack[0] && j > i) {
      if (nums[i] === riseStack[0]) {
        riseStack.shift();
      }
      if (nums[i] === downStack[0]) {
        downStack.shift();
      }
      i++;
    }
    if (downStack[0] - riseStack[0] <= limit && j != i) {
      maxLen = Math.max(maxLen, j - i + 1);
    }
    j++;

  }
  return maxLen;
};
