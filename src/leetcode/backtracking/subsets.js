/**
 * 78. 子集
 * https://leetcode-cn.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [[]];
  const traverse = function(nums, values) {

    const len = nums.length;
    for(let i = 0; i < len; i++) {
      const value = nums[i];
      values.push(value);
      result.push(values.slice(0));
      traverse(nums.slice(i + 1), values);
      values.pop(value);
    }
  };
  traverse(nums, []);
  return result;
};
