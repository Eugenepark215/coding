function maxProduct(nums) {
  var result = Math.max.apply(Math, nums);
  var min = 1;
  var max = 1;
  for (var i = 0; i < nums.length; i++) {
    var placeholder = max * nums[i];
    max = Math.max(nums[i] * max, nums[i] * min, nums[i]);
    min = Math.min(placeholder, nums[i] * min, nums[i]);
    result = Math.max(result, max);
  }
  return result;
}
