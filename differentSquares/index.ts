function solution(matrix: number[][]): number {
  const squareArray = [];
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[0].length - 1; j++) {
      const squares = [matrix[i][j],
        matrix[i][j + 1],
        matrix[i + 1][j],
        matrix[i + 1][j + 1]].join(',');
      if (!squareArray.includes(squares)) {
        squareArray.push(squares);
      }
    }
  }
  return squareArray.length;
}
solution([[1, 2, 1],
  [2, 2, 2],
  [2, 2, 2],
  [1, 2, 3],
  [2, 2, 1]]);
