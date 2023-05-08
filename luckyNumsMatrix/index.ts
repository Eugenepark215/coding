function luckyNumbers(matrix: number[][]): number[] {
  if (matrix.length === 0) {
    return [];
  }
  for (let i = 0; i < matrix.length; i++) {
    // loop is restarted with true
    let isLuckyNumber = true;
    // min value secured from row
    const minValue = Math.min(...matrix[i]);
    // index of  min value is secured
    const minValueIndex = matrix[i].indexOf(minValue);
    // iterate through remaining rows
    for (let j = 0; j < matrix.length; j++) {
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
