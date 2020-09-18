/**
 * 450. 删除二叉搜索树中的节点
 * https://leetcode-cn.com/problems/delete-node-in-a-bst/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) {
    return null;
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if(root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    if (root.left) {
      let node = root.left;
      while(node.right) {
        node = node.right;
      }
      root.val = node.val;
      root.left = deleteNode(root.left, node.val);
    } else if (root.right) {
      let node = root.right;
      while(node.left) {
        node = node.left;
      }
      root.val = node.val;
      root.right = deleteNode(root.right, node.val);
    } else {
      root = null;
    }
  }
  return root;
};
