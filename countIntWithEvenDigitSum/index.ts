function countEven(num: number): number {
  let total = 0;

  for (let i = 1; i <= num; i++) {
    let current = i;
    let sumDigits = 0;

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
