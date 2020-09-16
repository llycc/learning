/**
 * 98. 验证二叉搜索树
 * https://leetcode-cn.com/problems/validate-binary-search-tree/
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
var isValidBST = function(root) {
  if (!root) {
    return true;
  }
  const stack = [root];
  let node = root.left, max = -Infinity;
  while(stack.length > 0 || node) {
    while(node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    if (node.val <= max) {
      return false;
    }
    max = node.val;
    node = node.right;
  }
  return true;
};
