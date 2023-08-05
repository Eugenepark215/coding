/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * split into array
 * loop the length of string
 * push && shift
 */
var rotateString = function (s, goal) {
  const splitS = s.split('');
  for (let i = 0; i < s.length; i++) {
    const current = splitS.shift();
    splitS.push(current);
    const joinedSplitS = splitS.join('');
    if (joinedSplitS === goal) {
      return true;
    }
  }
  return false;
};

rotateString('abcde', 'bcdea');
