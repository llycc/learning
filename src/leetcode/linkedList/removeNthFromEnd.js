/**
 * 19. 删除链表的倒数第N个节点
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 快慢指针
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummy = {next: head, val: -1};
  let index = 0;
  let slow = fast = dummy;
  while(fast !== null) {
    if (index > n) {
      slow = slow.next;
    }
    fast = fast.next;
    index++;
  }
  slow.next = slow.next.next;
  return dummy.next;
};


/**
 * 递归
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEndRecu = function(head, n) {
  let index = 0;
  let prev = null;
  const removeNode = function(node) {
    if (node === null) {
      return;
    }
    removeNode(node.next);
    index++;
    if (index === n) {
      prev = node.next;
    }
    if (index === n + 1) {
      node.next = prev;
    }
  };
  removeNode(head);
  return index === n ? head.next : head;
};
