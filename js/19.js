/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const recorder = { node: head, count: 0 };
  const recordDelayNumber = n + 1;
  const record = () => {
    recorder.count += 1;
    if (recorder.count > recordDelayNumber) {
      recorder.node = recorder.node.next;
    }
  };
  visitNode(head, record);

  if (isRemoveHead(recorder, recordDelayNumber)) {
    // 表示應被刪的是head, 需要額外處理
    return head.next;
  }

  changeLinkedNode(recorder);

  return head;
};

function visitNode(node, callback) {
  while (node.next) {
    callback();
    node = node.next;
  }
  callback();
}

function isRemoveHead(recorder, recordDelayNumber) {
  if (recorder.count < recordDelayNumber) {
    return true;
  }

  return false;
}

function changeLinkedNode(recorder) {
  recorder.node.next = recorder.node.next.next;
}
