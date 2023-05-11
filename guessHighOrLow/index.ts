/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return     -1 if num is higher than the picked number
 *     1 if num is lower than the picked number
 *               otherwise return 0
 */
function guess(num:number) :number {
  // pick being arbitraty number called from api guess
  // eslint-disable-next-line prefer-const
  let pick = 0;
  if (pick === num) return 0;
  // eslint-disable-next-line
  else if (pick > num) return 1;
  else return -1;
}

function guessNumber(n: number): number {
  let min = 0;
  let max = n;
  while (min <= max) {
    const mid = Math.floor(min + (max - min) / 2);
    const result = guess(mid);
    if (result === 0) {
      return mid;
    } else if (result < 0) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return -1;
}
