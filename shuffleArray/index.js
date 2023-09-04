function shuffle(nums, n) {
  var half = [];
  var otherHalf = [];
  var mix = [];
  for (var i = 0; i < n; i++) {
    half.push(nums[i]);
    otherHalf.push(nums[i + n]);
  }
  for (var j = 0; j < half.length; j++) {
    mix.push(half[j]);
    mix.push(otherHalf[j]);
  }
  return mix;
}
shuffle([1, 2, 3, 4, 5, 6, 7, 8], 4);
