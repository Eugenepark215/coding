function climbStairs(n: number): number {
  if (n === 1) {
    return 1;
  }
  let firstStep = 1;
  let secondStep = 1;
  let thirdStep = 0;

  for (let i = 2; i < n + 1; i++) {
    thirdStep = firstStep + secondStep;
    firstStep = secondStep;
    secondStep = thirdStep;
  }
  return thirdStep;
}
