function solution(inputString) {
  var sortedArrayValue = [];
  var sortedArrayLetter = [];
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var letterOccurances = {};
  for (var i = 0; i < inputString.length; i++) {
    if (!letterOccurances[inputString[i]]) {
      letterOccurances[inputString[i]] = 1;
    } else {
      letterOccurances[inputString[i]]++;
    }
  }
  Object.keys(letterOccurances)
    .sort()
    .forEach(function (v) {
      sortedArrayValue.push(letterOccurances[v]);
      sortedArrayLetter.push(v);
    });
  var lastLetterInString = sortedArrayLetter[sortedArrayLetter.length - 1];
  var slicedAlphabet = alphabet.slice(0, alphabet.indexOf(lastLetterInString) + 1);
  if (slicedAlphabet.length > sortedArrayLetter.length) {
    return false;
  }
  for (var j = 0; j < sortedArrayValue.length; j++) {
    if (sortedArrayValue[j] < sortedArrayValue[j + 1]) {
      return false;
    }
  }
  return true;
}
solution('bbbcdafe');
