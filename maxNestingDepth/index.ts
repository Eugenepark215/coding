function maxDepth(s: string): number {
  let count = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      max = Math.max(max, ++count);
    } else if (s[i] === ')') {
      count--;
    }
  }
  return max;
}
