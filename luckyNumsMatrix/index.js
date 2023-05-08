function luckyNumbers(matrix) {
  if (matrix.length === 0) {
    return [];
  }
  for (var i = 0; i < matrix.length; i++) {
    // loop is restarted with true
    var isLuckyNumber = true;
    // min value secured from row
    var minValue = Math.min.apply(Math, matrix[i]);
    // index of  min value is secured
    var minValueIndex = matrix[i].indexOf(minValue);
    // iterate through remaining rows
    for (var j = 0; j < matrix.length; j++) {
      // skip if same - efficiency
      if (i === j) {
        continue;
      }
      // if current min is larger set isLucky false and break loop
      if (matrix[j][minValueIndex] > minValue) {
        isLuckyNumber = false;
        break;
      }
    }
    // if minValue passes conditional statements isLuckyNumber will also be true thus returining [minValue]
    if (isLuckyNumber) {
      return [minValue];
    }
  }
  return [];
}
luckyNumbers([[1, 2], [7, 8]]);
