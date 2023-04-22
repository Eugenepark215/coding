function majorityElement(nums: number[]): number {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  const number = Math.max(...map.values());
  function getByValue(map, searchValue) {
    for (const [key, value] of map.entries()) {
      if (value === searchValue) { return key; }
    }
  }
  return getByValue(map, number);
}
majorityElement([2, 2, 1, 1, 1, 2, 2]);
