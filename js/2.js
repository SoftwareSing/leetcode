/**
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
  const firstNode = { val: undefined, next: null };
  let nowNode = firstNode;
  let ten = 0;
  while (l1 || l2 || ten) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + ten;
    if (sum >= 10) {
      sum -= 10;
      ten = 1;
    }
    else {
      ten = 0;
    }

    nowNode.next = { val: sum, next: null };
    nowNode = nowNode.next;

    if (l1) {
      l1 = l1.next;  
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  return firstNode.next;
};
