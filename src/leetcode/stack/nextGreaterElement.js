/**
 * 496. 下一个更大元素 I
 * https://leetcode-cn.com/problems/next-greater-element-i/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const map = new Map();
  const stack = [];

  for(let i = 0; i < nums2.length; i++) {

    while(stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
      map.set(stack.pop(), nums2[i]);
    }
    stack.push(nums2[i]);
  }
  return nums1.map(item => map.has(item) ? map.get(item) : -1);
};
