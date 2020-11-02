/**
 * 46. 全排列
 * https://leetcode-cn.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (!nums || nums.length === 0) {
    return [];
  }
  const result = [];
  const backTrack = function(nums, valueSet) {
    if (nums.length === valueSet.size) {
      result.push(Array.from(valueSet));
      return;
    }
    for(let i = 0; i < nums.length; i++) {
      if (valueSet.has(nums[i])) {
        continue;
      }
      valueSet.add(nums[i]);
      backTrack(nums, valueSet);
      valueSet.delete(nums[i]);
    }
  };
  backTrack(nums, new Set());
  return result;
};
