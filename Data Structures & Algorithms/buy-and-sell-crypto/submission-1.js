class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let profit = 0, temp = 0;
      let minPrice = prices[0];
      
      for(let price of prices){
        temp = price - minPrice;
        profit = Math.max(profit, temp);
        minPrice = Math.min(minPrice, price);
      }
      
      return profit;
    }
}