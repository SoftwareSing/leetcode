/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  let count = 0;
  const sumList = [];
  const checkNode = (node) => {
    sumList.push(0);
    sumList.forEach((val, index) => {
      sumList[index] += node.val;
      if (sumList[index] === sum) {
        count += 1;
      }
    });

    if (node.left) {
      checkNode(node.left);
    }
    if (node.right) {
      checkNode(node.right);
    }

    sumList.pop();
    sumList.forEach((val, index) => {
      sumList[index] -= node.val;
    });
  };

  if (root) {
    checkNode(root);
  }

  return count;
};
