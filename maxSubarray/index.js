function maxSubArray(nums) {
  var local = 0;
  var global = -Infinity;
  for (var i = 0; i < nums.length; i++) {
    // find max between current index of nums and the value of local + nums[i]
    local = Math.max(nums[i], local + nums[i]);
    if (local > global) {
      global = local;
    }
  }
  return global;
}
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
