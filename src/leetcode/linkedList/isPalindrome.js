/**
 * 234. 回文链表
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let prev = head;
  var checkList = function(node) {
    if (node !== null) {
      if (!checkList(node.next) || prev.val !== node.val) {
        return false;
      }
      prev = prev.next;
    }

    return true;

  };
  return checkList(head);
};
