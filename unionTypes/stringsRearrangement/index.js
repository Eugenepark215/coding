'use strict';
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
exports.__esModule = true;
function solution(inputArray) {
  function differByOne(string1, string2) {
    var mismatches = 0;
    for (var i = 0; i < string1.length; i++) {
      if (string1[i] !== string2[i]) { mismatches++; }
    }
    return mismatches === 1;
  }
  function getPermutation(array) {
    var fullLength = array.length;
    var sequence = [];
    var permutation = [];
    function permute(a) {
      for (var i = 0; i < a.length; i++) {
        var str = a[i];
        sequence.push(str);
        if (sequence.length === fullLength) {
          permutation.push(__spreadArray([], sequence, true));
        } else {
          var remaining = __spreadArray(__spreadArray([], a.slice(0, 1), true), a.slice(i + 1), true);
          permute(remaining);
        }
        sequence.pop();
      }
    }
    permute(array);
    return permutation;
  }
  var sequences = getPermutation(inputArray);
  for (var _i = 0, sequences1 = sequences; _i < sequences1.length; _i++) {
    var sequence = sequences1[_i];
    var possible = true;
    for (var i = 1; i < sequence.length; i++) {
      var thisOne = sequence[i];
      var previousOne = sequence[i - 1];
      if (!differByOne(thisOne, previousOne)) {
        possible = false;
        break;
      }
    }
    if (possible) { return true; }
  }
  return false;
}
solution(['aba', 'bbb', 'bab']);
