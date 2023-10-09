function makeSmallestPalindrome(s: string): string {
  // create array from string;
  const arr = Array.from(s);
  const n = arr.length;

  for (let i = 0; i < n / 2; i++) {
    const left = arr[i];
    const right = arr[n - i - 1];

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
