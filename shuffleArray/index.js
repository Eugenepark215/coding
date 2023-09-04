function shuffle(nums, n) {
  var mix = [];
  for (var i = 0; i < n; i++) {
    mix.push(nums[i]);
    mix.push(nums[i + n]);
  }
  return mix;
}
shuffle([1, 2, 3, 4, 5, 6, 7, 8], 4);
