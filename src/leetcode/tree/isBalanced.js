/**
 * 110. 平衡二叉树
 * https://leetcode-cn.com/problems/balanced-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let result = true;
  const traverse = function(node) {
    if (!node) {
      return 0;
    }
    const leftHeight = traverse(node.left);
    const rightHeight = traverse(node.right);
    if (Math.abs(leftHeight-rightHeight) > 1) {
      result = false;
    }
    return Math.max(leftHeight, rightHeight) + 1;

  };
  traverse(root);
  return result
};
