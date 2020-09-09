
/**
 * 590. N叉树的后序遍历
 * https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// 递归
var postorder = function(root) {
  if (!root) {
    return [];
  }
  const list = [];
  const traverse = function(node) {
    for(let item of node.children) {
      traverse(item);
    }
    list.push(node.val);
  };
  traverse(root);
  return list;
};

// 迭代
var postorder = function(root) {
  if (!root) {
    return [];
  }
  const list = [], stack = [];
  stack.push(root)
  while(stack.length > 0) {
    const top = stack.pop();
    list.unshift(top.val);
    for(let item of top.children) {
      stack.push(item);
    }
  }
  return list;
};
