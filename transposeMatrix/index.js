// return array that contains array
// return array so that iniital array is flipped
// [[1,2,3],[4,5,6],[7,8,9]] -> [[1,4,7],[2,5,8],[3,6,9]]
// take iniital  index of arrays push into new array and return
function transpose(matrix) {
  var flipped = [];
  var arrayInsideArray = [];
  for (var i = 0; i < matrix[0].length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      arrayInsideArray.push(matrix[j][i]);
    }
    flipped.push(arrayInsideArray);
    arrayInsideArray = [];
  }
  return flipped;
}
