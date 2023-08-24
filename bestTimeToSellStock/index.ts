function maxProfit(prices: number[]): number {
  const profits: number[] = [];
  for (let i = 0; i < prices.length; i++) {
    let profitPerDay = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if ((prices[j] - prices[i]) > profitPerDay) {
        profitPerDay = prices[j] - prices[i];
      }
    }
    profits.push(profitPerDay);
  }
  if (Math.max(...profits) < 0) return 0;
  return Math.max(...profits);
}

maxProfit([7, 2, 3, 4, 6, 1]);
