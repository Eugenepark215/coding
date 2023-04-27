function generate(numRows) {
  if (numRows < 1) { return []; }
  if (numRows === 1) { return [[1]]; }
  var triangle = [[1]];
  for (var i = 1; i < numRows; i++) {
    var prevRow = triangle[i - 1];
    var curRow = [];
    curRow.push(1);
    for (var j = 1; j < prevRow.length; j++) {
      curRow[j] = prevRow[j] + prevRow[j - 1];
    }
    curRow.push(1);
    triangle.push(curRow);
  }
  return triangle;
}
