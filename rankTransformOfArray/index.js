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
  var map = new Map();
  var newSet = __spreadArray([], new Set(arr), true);
  var sortedSet = newSet.sort(function (a, b) { return a - b; });
  // map through sortedSet elements and set map
  sortedSet.map(function (x, i) { return map.set(x, i + 1); });
  // map through arr and replace elements with the value of the elements that was set in map
  return arr.map(function (x) { return map.get(x); });
}
