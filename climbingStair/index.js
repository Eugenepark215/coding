function climbStairs(n) {
  if (n === 1) {
    return 1;
  }
  var firstStep = 1;
  var secondStep = 1;
  var thirdStep = 0;
  for (var i = 2; i < n + 1; i++) {
    thirdStep = firstStep + secondStep;
    firstStep = secondStep;
    secondStep = thirdStep;
  }
  return thirdStep;
}
