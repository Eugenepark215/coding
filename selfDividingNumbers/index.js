function selfDividingNumbers(left, right) {
  var newArray = [];
  for (var i = left; i < right + 1; i++) {
    var number = i.toString();
    var splitNumber = number.split('');
    if (splitNumber.includes('0')) {
      continue;
    } else {
      var notHarmonius;
      for (var j = 0; j < splitNumber.length; j++) {
        if (i % parseInt(splitNumber[j]) !== 0) {
          notHarmonius = true;
          break;
        }
      }
      if (!notHarmonius) {
        newArray.push(i);
      }
    }
  }
  return newArray;
}
selfDividingNumbers(1, 22);
