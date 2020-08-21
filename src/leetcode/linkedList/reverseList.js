/**
 * 206. 反转链表
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let node = head, prev = null;
  while(node !== null) {
    const temp = node.next;
    node.next = prev;
    prev = node;
    node = temp;
  }
  return prev;
};

// 递归
var reverseListRecu = function(head) {
  if ( head === null || head.next === null) {
    return head;
  }
  const node = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return node;
};
