function maxDepth(s) {
  var count = 0;
  var max = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      max = Math.max(max, ++count);
    } else if (s[i] === ')') {
      count--;
    }
  }
  return max;
}
