/**
 * 589. N叉树的前序遍历
 * https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
 * @param {Node} root
 * @return {number[]}
 */
// 递归
var preorder = function(root) {
  const list = [];
  const traverse = function(node, list) {
    list.push(node.val);
    if (!node.children) {
      return;
    }
    for(let child of node.children) {
      traverse(child);
    }
  };
  traverse(root);
  return list;
};

// 迭代
var preorder = function(root) {
  if (!root) {
    return [];
  }
  const list = [], stack = [];
  stack.push(root);
  while(stack.length > 0) {
    let node = stack.pop();
    list.push(node.val);
    for(let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }
  return list;
};
