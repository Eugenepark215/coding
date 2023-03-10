function solution(s) {
  var amount = [s[0]];
  for (var i = 0; i < s.length; i++) {
    if (!amount.includes(s[i])) {
      amount.push(s[i]);
    }
  }
  return amount.length;
}
(solution('cabca'));
