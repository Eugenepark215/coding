function generate(numRows: number): number[][] {
  if (numRows < 1) return [];
  if (numRows === 1) return [[1]];

  const triangle = [[1]];
  for (let i = 1; i < numRows; i++) {
    const prevRow = triangle[i - 1];
    const curRow:number[] = [];
    curRow.push(1);
    for (let j = 1; j < prevRow.length; j++) {
      curRow[j] = prevRow[j] + prevRow[j - 1];
    }
    curRow.push(1);
    triangle.push(curRow);
  }
  return triangle;
}
