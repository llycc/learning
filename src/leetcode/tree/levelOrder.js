/**
 * 102. 二叉树的层序遍历
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  const result = [[]];
  let stack = [root], next = [];
  while(stack.length > 0) {
    const node = stack.shift();
    result[result.length - 1].push(node.val);
    if (node.left) {
      next.push(node.left);
    }
    if (node.right) {
      next.push(node.right);
    }

    if (stack.length === 0 && next.length > 0) {
      stack = next;
      next = [];
      result.push([]);
    }
  }
  return result;
};
