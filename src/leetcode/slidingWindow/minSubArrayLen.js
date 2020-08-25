/**
 * 209. 长度最小的子数组
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// 双指针
var minSubArrayLen = function(s, nums) {
  let i = 0, j = 0;
  let sum = 0, minLen = Infinity;

  while(i < nums.length && j <= nums.length) {
    if (sum < s) {
      sum += nums[j];
      j++;
    } else {
      sum -= nums[i];
      i++;
    }
    if (sum >= s) {
      minLen = Math.min(minLen, j - i);
    }
    if (minLen === 1) {
      break;
    }
  }
  return minLen > nums.length ? 0 : minLen;
};
