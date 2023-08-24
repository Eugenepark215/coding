function maxProfit(prices) {
  var profits = [];
  for (var i = 0; i < prices.length; i++) {
    var profitPerDay = 0;
    for (var j = i + 1; j < prices.length; j++) {
      if ((prices[j] - prices[i]) > profitPerDay) {
        profitPerDay = prices[j] - prices[i];
      }
    }
    profits.push(profitPerDay);
  }
  if (Math.max.apply(Math, profits) < 0) { return 0; }
  return Math.max.apply(Math, profits);
}
maxProfit([7, 2, 3, 4, 6, 1]);
