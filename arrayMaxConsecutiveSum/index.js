function solution(inputArray, k) {
  var highest = 0;
  for (var i = 0; i < inputArray.length; i++) {
    var current = 0;
    for (var j = 0; j < k; j++) {
      current += inputArray[i + j];
      if (current > highest) {
        highest = current;
      }
    }
  }
  return highest;
}
solution([12, 34, 56, 78], 3);
