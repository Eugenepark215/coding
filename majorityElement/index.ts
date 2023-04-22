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

  for (const [key, value] of map.entries()) {
    if (value === number) { return key; }
  }

}
majorityElement([2, 2, 1, 1, 1, 2, 2]);
