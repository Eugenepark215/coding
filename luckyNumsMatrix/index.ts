function luckyNumbers(matrix: number[][]): number[] {
  for (let i = 1; i < matrix.length + 1; i++) {
    const prev = i - 1;
    const next = i + 1;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === Math.min(...matrix[i]) && matrix[i][j] < matrix[prev][j] && matrix[next][j]) {
        return [matrix[i][j]];
      }
    }
  }
}
