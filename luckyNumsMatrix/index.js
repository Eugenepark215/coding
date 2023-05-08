function luckyNumbers(matrix) {
  for (var i = 1; i < matrix.length + 1; i++) {
    var prev = i - 1;
    var next = i + 1;
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === Math.min.apply(Math, matrix[i]) && matrix[i][j] < matrix[prev][j] && matrix[next][j]) {
        return [matrix[i][j]];
      }
    }
  }
}
