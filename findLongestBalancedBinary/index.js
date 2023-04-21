function findTheLongestBalancedSubstring(s) {
  if (!s.match(/0/g) || !s.match(/1/g)) {
    return 0;
  }
  var result = 0;
  var zeroCount = 0;
  var oneCount = 0;
  for (var _i = 0, s1 = s; _i < s1.length; _i++) {
    var char = s1[_i];
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
