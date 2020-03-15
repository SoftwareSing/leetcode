/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @typedef {Object} ListNode
 * @property {Number} val
 * @property {ListNode} next
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  const start = { val: null, next: null };
  let now = start;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      now.next = l1;
      l1 = l1.next;
    }
    else {
      now.next = l2;
      l2 = l2.next;
    }
    now = now.next;
  }

  while (l1 !== null) {
    now.next = l1;
    l1 = l1.next;
    now = now.next;
  }
  while (l2 !== null) {
    now.next = l2;
    l2 = l2.next;
    now = now.next;
  }

  now.next = null;

  return start.next;
};
