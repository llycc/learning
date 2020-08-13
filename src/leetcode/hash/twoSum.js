/**
 * 两数之和
 * 题目：https://leetcode-cn.com/problems/two-sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const numsMap = new Map();
  const len = nums.length;

  for(let i = 0; i < len; i++) {
    const diff = target - nums[i];
    const index = numsMap.get(diff);
    if (index !== undefined) {
      return [index, i];
    }
    numsMap.set(nums[i], i);
  }
  return [];
};
