/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return     -1 if num is higher than the picked number
 *     1 if num is lower than the picked number
 *               otherwise return 0
 */
function guess(num) {
  // pick being arbitraty number called from api guess
  // eslint-disable-next-line prefer-const
  var pick = 0;
  if (pick === num) return 0;
  // eslint-disable-next-line
    else if (pick > num) { return 1; } else { return -1; }
}
function guessNumber(n) {
  var min = 0;
  var max = n;
  while (min <= max) {
    var mid = Math.floor(min + (max - min) / 2);
    var result = guess(mid);
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
