/**
 * 560. 和为K的子数组
 * https://leetcode-cn.com/problems/subarray-sum-equals-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 前缀和优化
var subarraySum = function(nums, k) {
  const map = new Map();
  let result = 0;
  let sum = 0;

  map.set(0, 1);
  nums.forEach((item, index) => {
    sum += item;
    const diff = sum - k;
    if (map.has(diff)) {
      result += map.get(diff);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  });

  return result
};
