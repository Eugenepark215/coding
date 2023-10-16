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
// given an integer,n, return an array that contains the elemennts:number of the nth row of a pascals triangle
// loop that traverses down pascals triangle
// create variable that will be placeholder to hold values of triangle
// once the final loop occurs place values of arary
function getRow(rowIndex) {
  // if number is 0 return [1];
  if (!rowIndex) { return [1]; }
  var res = [1, 1];
  // loop will continue until rowIndex = 0
  while (--rowIndex) {
    var next = [];
    for (var i = 0; i < res.length - 1; i++) {
      // the sum of adjacent number in element will be pushed into next
      next.push(res[i] + res[i + 1]);
    }
    // next array used also a reference
    // res will equal the current next that was modified preloop
    res = __spreadArray(__spreadArray([1], next, true), [1], false);
  }
  return res;
}
getRow(4);
