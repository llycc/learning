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

  while( j < nums.length) {
    sum += nums[j];
    while(sum >= s) {
      minLen = Math.min(minLen, j - i + 1);
      sum -= nums[i];
      i++;
    }
    j++;
  }
  return minLen > nums.length ? 0 : minLen;
};
