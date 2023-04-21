function findTheLongestBalancedSubstring(s: string): number {
  if (!s.match(/0/g) || !s.match(/1/g)) {
    return 0;
  }
  let result = 0;
  let zeroCount = 0;
  let oneCount = 0;

  for (const char of s) {
    if (char === '0') {
      if (oneCount) {
        // sets value to result and resets
        result = Math.max(result, Math.min(zeroCount, oneCount) * 2);
        zeroCount = 0;
        oneCount = 0;
      }
      zeroCount++;
    } else {
      oneCount++;
    }
  }
  // result is assigned value of max
  result = Math.max(result, Math.min(zeroCount, oneCount) * 2);
  return result;
}
findTheLongestBalancedSubstring('01000111');
