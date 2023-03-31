function solution(inputString) {
  var patt = /[^0-9]/;
  var numberSplit = inputString.split(patt);
  var numbers = numberSplit.filter(function (number) { return parseInt(number); });
  var sum = numbers.reduce(function (partialSum, a) { return partialSum + parseInt(a); }, 0);
  return sum;
}
solution('2 apples, 12 oranges');
