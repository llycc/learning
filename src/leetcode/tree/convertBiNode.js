/**
 * 面试题 17.12. BiNode
 * https://leetcode-cn.com/problems/binode-lcci/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function(root) {
  let prevNode = null, head = null;
  const traverse = function(node) {
    if (!node) {
      return;
    }
    traverse(node.left);
    if (prevNode === null) {
      head = node;
    } else {
      prevNode.right = node;
    }
    prevNode = node;
    node.left = null;
    traverse(node.right);
  };
  traverse(root);
  return head;
};
