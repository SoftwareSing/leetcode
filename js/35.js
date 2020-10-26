/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums[0] >= target) {
    return 0
  }
  if (nums[nums.length - 1] < target) {
    return nums.length
  }

  let i = 1
  let minI = 0
  let maxI = nums.length - 1
  while (i !== minI) {
    if (nums[i] >= target) {
      maxI = i
      i = Math.floor((i + minI) / 2)
    } else {
      minI = i
      i = Math.floor((maxI + i) / 2)
    }
  }

  return i + 1
};
