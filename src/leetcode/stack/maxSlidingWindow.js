/**
 * 剑指 Offer 59 - I. 滑动窗口的最大值
 * https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const result = [], queue = [];
  let i = 0, j = 0;
  while(j < nums.length) {

    if (i > 0 && nums[i - 1] === queue[0]) {
      queue.shift();
    }

    while(queue.length > 0 && nums[j] > queue[queue.length - 1]) {
      queue.pop();
    }
    queue.push(nums[j]);
    if (j >= k - 1) {
      result[i] = queue[0];
      i++;
    }
    j++
  }
  return result;
};
