function solution(n) {
  var numbersString = n.toString().split('');
  var shallowCopy = numbersString.slice();
  var newArray = [];
  for (var i = 0; i < numbersString.length; i++) {
    shallowCopy.splice(i, 1);
    newArray.push(parseInt(shallowCopy.join('')));
    shallowCopy = numbersString.slice();
  }
  return Math.max.apply(Math, newArray);
}
solution(152);
