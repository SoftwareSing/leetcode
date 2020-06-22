/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const j = map.get(target - nums[i]);
    if (j !== undefined) {
      return [j, i];
    }
    map.set(nums[i], i);
  }
  return [];
};
