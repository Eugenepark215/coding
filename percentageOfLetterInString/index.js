// input: 2 strings, first string of multiple length, second length = 1
// return percentage number eg 33 for 1/3
// iterate through string
// use map to set key value(occurences of specific s) pairs
// map.get(s) to find occurence
// divide value of map.get(s) to length of given string
// if s is not within the given string return 0
function percentageLetter(s, letter) {
  if (!s.includes(letter)) {
    return 0;
  } else {
    var newMap = new Map();
    for (var i = 0; i < s.length; i++) {
      if (!newMap.get(s[i])) {
        newMap.set(s[i], 1);
      } else {
        newMap.set(s[i], newMap.get(s[i]) + 1);
      }
    }
    return Math.floor((newMap.get(letter) / s.length) * 100);
  }
}
