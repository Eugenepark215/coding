function findTheLongestBalancedSubstring(s: string): number {
  let zeroL = 0;
  let oneL = 0;
  const zeroCount = s.match(/0/g);
  const oneCount = s.match(/1/g);
  if (!zeroCount || !oneCount) {
    return 0;
  } else {
    zeroL = zeroCount.length;
    oneL = oneCount.length;
  }
  const occurrence = zeroL > oneL ? zeroL : oneL;
  let subString = '';
  const amount: number[] = [];
  for (let i = 0; i < occurrence; i++) {
    subString = '0' + subString + '1';
    amount.push(parseInt(subString, 2));
  }
  return Math.max(...amount);
}
findTheLongestBalancedSubstring('01000111');
