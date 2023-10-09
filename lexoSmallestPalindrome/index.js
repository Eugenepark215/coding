function makeSmallestPalindrome(s) {
  var sArray = s.split('');
  var newString = [];
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var string1 = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var string2 = [];
  // split and fill string1 and string2
  for (var i = 0; i < Math.floor(s.length / 2); i++) {
    string1.push(sArray.shift());
    string2.push(sArray.pop());
  }
  // if length is uneven push middle string element into newString
  if (s.length % 2 !== 0) {
    newString.push(s[Math.floor(s.length / 2)]);
  }
  // check values and splice in accordance to alphabet
  for (var j = 0; j < string1.length; j++) {
    if (string1[j] !== string2[j]) {
      if (alphabet.indexOf(string1[j]) > alphabet.indexOf(string2[j])) {
        string1.splice(j, 1, string2[j]);
      } else {
        string2.splice(j, 1, string1[j]);
      }
    }
  }
  newString.unshift.apply(newString, string1);
  newString.push.apply(newString, string2.reverse());
  return newString.join('');
}
makeSmallestPalindrome('abcd');
// make variable array that contains alaphabet
// split the string s into 2 variables
// if the length of the string is uneven eg 5 (s.length % 2 !== 0)
// then Math.floor();
// compare the letters of string1[i] to string2[i]
// if there is a discrepancy find index of the letter in regards const alpahbet and replace splice
// create variable that will be placeholder for string
