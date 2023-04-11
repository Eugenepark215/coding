function runningSum(nums) {
  var newArray = [];
  var num = 0;
  for (var i = 0; i < nums.length; i++) {
    num += nums[i];
    newArray.push(num);
  }
  return newArray;
}
runningSum([3, 1, 2, 10, 1]);
