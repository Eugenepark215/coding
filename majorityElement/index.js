function majorityElement(nums) {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  var number = Math.max.apply(Math, map.values());
  for (var _i = 0, _a = map.entries(); _i < _a.length; _i++) {
    var _b = _a[_i]; var key = _b[0]; var value = _b[1];
    if (value === number) {
      return key;
    }
  }
}
majorityElement([2, 2, 1, 1, 1, 2, 2]);
