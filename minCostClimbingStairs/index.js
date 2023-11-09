function minCostClimbingStairs(cost) {
  var first = cost[0];
  var second = cost[1];
  // index starts at 2 becuase cost[0] and cost[1] are already defined
  for (var i = 2; i < cost.length; i++) {
    // curent cost is reflected on current index by adding the min of first & second
    var current = cost[i] + Math.min(first, second);
    first = second;
    second = current;
  }
  return Math.min(first, second);
}
