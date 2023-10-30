function getLucky(s: string, k: number): number {
  // starting letter
  const base = 'a'.charCodeAt(0);

  let sum = 0;
  // first conversion will run since 1 <= 1
  for (let i = 0; i < s.length; i++) {
    // converts string into number in accordance to alphabet
    const val = s.charCodeAt(i) - base + 1;
    // will add the total of the converted value into sum
    sum += Math.floor(val / 10) + val % 10;
  }
  // conversion will repeat k times
  for (let j = 1; j < k; j++) {
    const numStr = sum.toString();
    sum = 0;
    for (let l = 0; l < numStr.length; l++) {
      sum += Number(numStr[l]);
    }
  }
  return sum;
}
