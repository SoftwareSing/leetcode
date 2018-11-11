/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};
  nums.forEach((num, index) => {
    map[num] = index;
  });
  for (let i = 0; i < nums.length; i += 1) {
    const targetNum = target - nums[i];
    if (map[targetNum]) {
      if (map[targetNum] !== i) {
        return [i, map[targetNum]];
      }
    }
  }
};
