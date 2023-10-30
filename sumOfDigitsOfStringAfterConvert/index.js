function getLucky(s, k) {
  // starting letter
  var base = 'a'.charCodeAt(0);
  var sum = 0;
  // first conversion will run since 1 <= 1
  for (var i = 0; i < s.length; i++) {
    // converts string into number in accordance to alphabet
    var val = s.charCodeAt(i) - base + 1;
    // will add the total of the converted value into sum
    sum += Math.floor(val / 10) + val % 10;
  }
  // conversion will repeat k times
  for (var j = 1; j < k; j++) {
    var numStr = sum.toString();
    sum = 0;
    for (var l = 0; l < numStr.length; l++) {
      sum += Number(numStr[l]);
    }
  }
  return sum;
}
