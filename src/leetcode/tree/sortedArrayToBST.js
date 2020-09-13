/**
 * 面试题 04.02. 最小高度树
 * https://leetcode-cn.com/problems/minimum-height-tree-lcci/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const traverse = function(list, start , end) {
    if (!list || start >= end) {
      return null;
    }
    const middle = Math.floor((end - start) / 2) + start;
    const root = {val: list[middle], left: null, right: null};

    root.left = traverse(list, start, middle);
    root.right = traverse(list, middle + 1, end);
    return root;
  }
  return  traverse(nums, 0, nums.length);
};
