/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i += 1) {
    let count = 0;
    while (nums[i] === nums[i + count + 1]) {
      count += 1;
    }
    if (count > 0) {
      nums.splice(i, count);
    }
  }

  return nums.length;
};
