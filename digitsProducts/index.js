function solution(product) {
  function digitProduct(num) {
    // multiplies prod = 1 by a given value /10 in while loop
    // exits when num is falsy
    var prod = 1;
    while (num) {
      prod *= num % 10;
      num = Math.floor(num / 10);
    }
    return prod;
  }
  for (var i = 1; i < 10000; i++) {
    // i is iterated until the consecutive integers equal the product
    if (digitProduct(i) === product) {
      return i;
    }
  }
  return -1;
}
solution(450);
