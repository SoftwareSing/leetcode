import math

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minPrice = math.inf
        profit = 0
        for price in prices:
            if (price < minPrice):
                minPrice = price
            elif (price - minPrice > profit):
                profit = price - minPrice
        return profit
