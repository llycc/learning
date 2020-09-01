/**
 * 面试题 17.16. 按摩师
 * https://leetcode-cn.com/problems/the-masseuse-lcci/
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let dp0 = 0, dp1 = nums[0];

  for(let i = 1; i < nums.length; i++) {
    const tdp0 = Math.max(dp0, dp1);
    const tdp1 = dp0 + nums[i];
    dp0 = tdp0;
    dp1 = tdp1;
  }
  return Math.max(dp0, dp1);
};
