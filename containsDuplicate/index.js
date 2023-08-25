function containsDuplicate(nums) {
  var tF = false;
  while (nums.length !== 0) {
    var current = nums[0];
    nums.shift();
    if (nums.includes(current)) {
      tF = true;
    }
  }
  return tF;
}
containsDuplicate([1, 2, 3, 1]);
