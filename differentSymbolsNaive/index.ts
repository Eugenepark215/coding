function solution(s: string): number {
  const amount = [s[0]];
  for (let i = 0; i < s.length; i++) {
    if (!amount.includes(s[i])) {
      amount.push(s[i]);
    }
  }
  return amount.length;
}
(solution('cabca'));
