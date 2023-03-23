function solution(inputString) {
  var splitArray = inputString.split('-');
  if (splitArray.length !== 6) {
    return false;
  }
  var aF = 'ABCDEF'.split('');
  for (var i = 0; i < splitArray.length; i++) {
    if (splitArray[i].length !== 2) {
      return false;
    } else if (!aF.includes(splitArray[i][0]) && isNaN(parseInt(splitArray[i][0]))) {
      return false;
    } else if (!aF.includes(splitArray[i][1]) && isNaN(parseInt(splitArray[i][1]))) {
      return false;
    }
  }
  return true;
}
solution('00-1B-63-84-45-E6');
