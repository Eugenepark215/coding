function maximumWealth(accounts) {
  var sumArray = [];
  for (var i = 0; i < accounts.length; i++) {
    var num = 0;
    for (var j = 0; j < accounts[i].length; j++) {
      num += accounts[i][j];
    }
    sumArray.push(num);
  }
  return Math.max.apply(Math, sumArray);
}
maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]);
