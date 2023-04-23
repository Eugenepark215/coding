function countEven(num) {
  var total = 0;
  for (var i = 1; i <= num; i++) {
    var current = i;
    var sumDigits = 0;
    while (current > 0) {
      sumDigits += current % 10;
      current = Math.floor(current / 10);
    }
    if (sumDigits % 2 === 0) {
      total++;
    }
  }
  return total;
}
countEven(31);
