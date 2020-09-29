/**
 * 117. 填充每个节点的下一个右侧节点指针 II
 * https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) {
    return null;
  }
  root.next = null;
  let node = root, childStartNode = null;
  let prevNode = {};
  while(node) {
    if (node.left) {
      prevNode.next = node.left;
      prevNode = node.left;
      childStartNode = childStartNode? childStartNode : node.left;
    }
    if (node.right) {
      prevNode.next = node.right;
      prevNode = node.right;
      childStartNode = childStartNode ? childStartNode : node.right;
    }
    if (node.next) {
      node = node.next;
    } else {
      node.next = null;
      node = childStartNode;
      childStartNode = null;
      prevNode = {};
    }
  }
  return root;
};
