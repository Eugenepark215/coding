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
function arrayRankTransform(arr) {
  var shallow = arr.slice();
  var newSet = __spreadArray([], new Set(shallow), true);
  var sortedSet = newSet.sort(function (a, b) { return a - b; });
  for (var i = 0; i < arr.length; i++) {
    arr.splice(i, 1, (sortedSet.indexOf(arr[i]) + 1));
  }
  return arr;
}
