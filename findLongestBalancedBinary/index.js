function findTheLongestBalancedSubstring(s) {
  var zeroL = 0;
  var oneL = 0;
  var zeroCount = s.match(/0/g);
  var oneCount = s.match(/1/g);
  if (!zeroCount || !oneCount) {
    return 0;
  } else {
    zeroL = zeroCount.length;
    oneL = oneCount.length;
  }
  var occurrence = zeroL > oneL ? zeroL : oneL;
  var subString = '';
  var amount = [];
  for (var i = 0; i < occurrence; i++) {
    subString = '0' + subString + '1';
    amount.push(parseInt(subString, 2));
  }
  return Math.max.apply(Math, amount);
}
findTheLongestBalancedSubstring('01000111');
