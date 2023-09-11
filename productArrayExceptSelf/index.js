function productExceptSelf(nums) {
  // create new array with length of nums and fill with values of 1
  var result = Array(nums.length).fill(1);
  var numsLen = nums.length;
  // creates new array with 2 elements value of 1
  var curr = Array(2).fill(1);
  for (var i = 1; i < numsLen; i++) {
    // curr[0] is multiplied by each value of nums by index order on each loop
    curr[0] *= nums[i - 1];
    // curr[1] is multipled by each value of nums by reverse index order on each loop
    curr[1] *= nums[numsLen - i];
    // the value starting from index 1 is multipled by curr[0] for each loop
    result[i] *= curr[0];
    // the value starting from second to last index is multipled by curr[1] for each loop
    result[numsLen - i - 1] *= curr[1];
  }
  return result;
}
productExceptSelf([1, 2, 3, 4]);
