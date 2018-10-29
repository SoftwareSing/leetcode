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
  const recordList = [];
  const recordNodeNumber = n + 1;
  visitNode(head, recordNodeNumber, recordList);
  if (isRemoveHead(recordList, recordNodeNumber)) {
    // 表示應被刪的是head, 需要額外處理
    head = head.next;
  }
  else {
    changeLinkedNode(recordList, recordNodeNumber);
  }

  return head;
};

function visitNode(node, recordNodeNumber, recordList) {
  while (node.next) {
    recordNode(node, recordNodeNumber, recordList);
    node = node.next;
  }
  recordNode(node, recordNodeNumber, recordList);
}

function recordNode(node, recordNodeNumber, recordList) {
  recordList.push(node);
  if (recordList.length > recordNodeNumber) {
    recordList.shift();
  }
}

function isRemoveHead(recordList, recordNodeNumber) {
  if (recordList.length < recordNodeNumber) {
    return true;
  }

  return false;
}

function changeLinkedNode(recordList, recordNodeNumber) {
  recordList[0].next = recordList[2];
}
