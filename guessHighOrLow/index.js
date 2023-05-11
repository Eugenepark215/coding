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
  var pick = n;
  while (guess(pick) !== 0) {
    if (guess(n) === -1) {
      pick--;
    } else if (guess(n) === 1) {
      pick++;
    }
  }
  return pick;
}
