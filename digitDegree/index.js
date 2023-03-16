function solution(n) {
  var nToString = n.toString();
  var degree = 0;
  while (nToString.length > 1) {
    degree++;
    var amount = 0;
    for (var i = 0; i < nToString.length; i++) {
      amount += parseInt(nToString[i]);
    }
    nToString = amount.toString();
  }
  return degree;
}
solution(777773);
