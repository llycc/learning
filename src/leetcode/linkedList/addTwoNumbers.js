/**
 * 2. 两数相加
 * https://leetcode-cn.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = {val: 0, next: null}, node = head;
  let carry = 0;
  while(l1 !== null || l2 !== null) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    const value = carry + x + y;
    node.next = {
      val: value % 10,
      next: null
    };
    carry = parseInt(value / 10);
    node = node.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;

  }
  if (carry > 0) {
    node.next = {
      val: carry,
      next: null
    };
  }
  return head.next;
};
