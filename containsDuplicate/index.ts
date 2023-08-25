function containsDuplicate(nums: number[]): boolean {
  let tF = false;
  while (nums.length !== 0) {
    const current = nums[0];
    nums.shift();
    if (nums.includes(current)) {
      tF = true;
    }
  }
  return tF;
}

containsDuplicate([1, 2, 3, 1]);
