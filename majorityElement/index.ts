function majorityElement(nums: number[]): number {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  let number = 0;
  for (const value of map.values()) {
    if (value > number) {
      number = value;
    }
  }
  function getByValue(map, searchValue) {
    for (const [key, value] of map.entries()) {
      if (value === searchValue) { return key; }
    }
  }
  return getByValue(map, number);
}
majorityElement([2, 2, 1, 1, 1, 2, 2]);
