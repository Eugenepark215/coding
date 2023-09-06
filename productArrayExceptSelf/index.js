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
function productExceptSelf(nums) {
  var answerArray = [];
  for (var i = 0; i < nums.length; i++) {
    var numsArray = __spreadArray([], nums, true);
    numsArray.splice(i, 1);
    var inital = numsArray[0];
    for (var j = 1; j < numsArray.length; j++) {
      inital *= numsArray[j];
    }
    answerArray.push(inital);
  }
  return answerArray;
}
productExceptSelf([1, 2, 3, 4]);
