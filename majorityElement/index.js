function majorityElement(nums) {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  var number = 0;
  for (var _i = 0, _a = map.values(); _i < _a.length; _i++) {
    var value = _a[_i];
    if (value > number) {
      number = value;
    }
  }
  function getByValue(map, searchValue) {
    for (var _i = 0, _a = map.entries(); _i < _a.length; _i++) {
      var _b = _a[_i]; var key = _b[0]; var value = _b[1];
      if (value === searchValue) {
        return key;
      }
    }
  }
  return getByValue(map, number);
}
majorityElement([2, 2, 1, 1, 1, 2, 2]);
