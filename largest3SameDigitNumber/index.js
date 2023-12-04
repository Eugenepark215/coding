function largestGoodInteger(num) {
  var array1 = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i + 2] === num[i + 1] && num[i + 2] === num[i]) {
      array1.push(parseInt(num.slice(i, i + 3)));
    }
  }
  if (array1.length === 0) { return ''; }
  if (Math.max.apply(Math, array1) === 0) { return '000'; }
  return Math.max.apply(Math, array1).toString();
}
