/**
 * 94. 二叉树的中序遍历
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const nodeStack = [];
  const values = [];
  let node = root;
  while(nodeStack.length > 0 || node) {
    while(node) {
      nodeStack.push(node);
      node  = node.left;
    }
    node = nodeStack.pop();
    values.push(node.val);

    node = node.right ? node.right : null;
  }
  return values;
};
