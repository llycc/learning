/**
 * 53. 最大子序和
 * https://leetcode-cn.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let prevMaxSum = 0, maxSum = nums[0];

  for(let item of nums) {
    prevMaxSum = Math.max(prevMaxSum + item, item);
    maxSum = Math.max(prevMaxSum, maxSum);
  }
  return maxSum;
};
