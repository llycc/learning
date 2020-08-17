/**
 * 525. 连续数组
 * https://leetcode-cn.com/problems/contiguous-array/
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength= function(nums) {
  const map = new Map();
  let maxSubLen = 0;
  let count = 0;

  map.set(0, 0);
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    }
    if (nums[i] === 0) {
      count--;
    }
    if (!map.has(count)) {
      map.set(count, i + 1);
    } else {
      maxSubLen = Math.max(maxSubLen, i - map.get(count) + 1);
    }

  }
  return maxSubLen;
};
