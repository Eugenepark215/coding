/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const splitS = s.split(' ');
  if (splitS.length !== pattern.length) {
    return false;
  }
  const mappedSPattern = new Map();
  for (let i = 0; i < pattern.length; i++) {
    const check = Array.from(mappedSPattern.values()).includes(splitS[i]);
    if (!mappedSPattern.get(pattern[i]) && !check) {
      mappedSPattern.set(pattern[i], splitS[i]);
    } else if (mappedSPattern.get(pattern[i]) === splitS[i]) {
      // eslint-disable-next-line no-console
      console.log(1);
    } else {
      return false;
    }
  }
  return true;

};

wordPattern('aaaa', 'cat cat cat cat');
