/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const numMap = new Map()
  let max = nums[0]
  let min = nums[0]
  for (const num of nums) {
    const count = numMap.get(num) || 0
    numMap.set(num, count + 1)

    max = Math.max(max, num)
    min = Math.min(min, num)
  }

  let sortNums = []
  if (max - min < numMap.size ** 2) {
    for (let num = min; num <= max; num += 1) {
      if (numMap.has(num)) {
        sortNums.push(num)
      }
    }
  } else {
    sortNums = [...numMap.keys()].sort()
  }

  const result = []
  for (let i = sortNums.length - 1; i >= 0; i -= 1) {
    const numI = sortNums[i]
    if (numI < 0) {
      break
    }

    for (let j = 0; j <= i; j += 1) {
      const numJ = sortNums[j]
      const twoSum = numI + numJ
      if (twoSum > numI) {
        break
      }

      const threeNum = 0 - twoSum
      if (threeNum < numJ) {
        break
      }
      if (threeNum > numI) {
        continue
      }

      let threeNumCount = (numMap.get(threeNum) || 0) - (numI === threeNum ? 1 : 0) - (numJ === threeNum ? 1 : 0)
      if (threeNumCount < 1) {
        continue
      }

      const answer = [numJ, threeNum, numI]
      result.push(answer)
    }
  }


  return result
}
