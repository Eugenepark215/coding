function minCostClimbingStairs(cost: number[]): number {
  let first = cost[0];
  let second = cost[1];
  // index starts at 2 becuase cost[0] and cost[1] are already defined
  for (let i = 2; i < cost.length; i++) {
    // curent cost is reflected on current index by adding the min of first & second
    const current = cost[i] + Math.min(first, second);
    first = second;
    second = current;
  }
  return Math.min(first, second);
}
