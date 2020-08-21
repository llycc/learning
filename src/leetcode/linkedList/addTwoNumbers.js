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
  while(l1 !== null && l2 !== null) {
    const value = carry + l1.val + l2.val;
    node.next = {
      val: value % 10,
      next: null
    };
    node = node.next;
    l1 = l1.next;
    l2 = l2.next;
    carry = parseInt(value / 10);
  }
  let remainNode = l1 || l2;
  if (remainNode) {
    while(remainNode !== null) {
      const value = carry + remainNode.val ;
      node.next = {
        val: value % 10,
        next: null
      };
      node = node.next;
      remainNode = remainNode.next;
      carry = parseInt(value / 10);
    }
  }
  if (carry > 0) {
    node.next = {
      val: carry,
      next: null
    };
  }
  return head.next;
};
