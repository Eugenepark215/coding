function makeSmallestPalindrome(s) {
  // create array from string;
  var arr = Array.from(s);
  var n = arr.length;
  for (var i = 0; i < n / 2; i++) {
    var left = arr[i];
    var right = arr[n - i - 1];
    if (left !== right) {
      // can compare string lexographically
      if (left < right) {
        // replace string given condition
        arr[n - i - 1] = left;
      } else {
        arr[i] = right;
      }
    }
  }
  return arr.join('');
}
makeSmallestPalindrome('abcd');
