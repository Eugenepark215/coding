var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
  if (pack || arguments.length === 2) {
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
function uncommonFromSentences(s1, s2) {
  // values in set occur only once
  var wordSet = new Set();
  var removed = new Set();
  var combined = ''.concat(s1, ' ').concat(s2).split(' ');
  for (var _i = 0, combined1 = combined; _i < combined1.length; _i++) {
    var word = combined1[_i];
    if (wordSet.has(word) || removed.has(word)) {
      wordSet.delete(word);
      removed.add(word);
    } else {
      wordSet.add(word);
    }
  }
  // return values of wordSet in array
  return __spreadArray([], wordSet, true);
}
