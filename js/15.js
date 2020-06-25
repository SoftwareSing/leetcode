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

  const sortNums = []
  for (let num = min; num <= max; num += 1) {
    if (numMap.has(num)) {
      sortNums.push(num)
    }
  }

  const result = new Set()
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
      if (threeNum > numI) {
        continue
      }

      let threeNumCount = (numMap.get(threeNum) || 0) - (numI === threeNum ? 1 : 0) - (numJ === threeNum ? 1 : 0)
      if (threeNumCount < 1) {
        continue
      }

      const answer = [numJ, numI, threeNum].sort()
      result.add(JSON.stringify(answer))
    }
  }


  return [...result.values()].map((str) => {
    return JSON.parse(str)
  })
}
