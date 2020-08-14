/**
 * 剑指 Offer 03. 数组中重复的数字
 * https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  const len = nums.length;

  for(let i = 0; i < len; i++) {
    while(nums[i] !== i) {
      const temp = nums[i];
      if (nums[i] === nums[temp]) {
        return nums[i];
      }
      [nums[i], nums[temp]] = [nums[temp], nums[i]];
    }
  }
  return -1;
};
