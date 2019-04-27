/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = Infinity
  let profit = 0
  prices.forEach((price) => {
    if (price < minPrice) {
      minPrice = price
    }
    else if (price - minPrice > profit) {
      profit = price - minPrice
    }
  });
  return profit
};
