function containsDuplicate(nums) {
  var set = new Set(nums);
  return (set.size < nums.length);
}
containsDuplicate([1, 2, 3, 1]);
