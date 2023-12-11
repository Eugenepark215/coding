function maxProduct(nums: number[]): number {
  let result = Math.max(...nums);
  let min = 1;
  let max = 1;
  for (let i = 0; i < nums.length; i++) {
    const placeholder = max * nums[i];
    max = Math.max(nums[i] * max, nums[i] * min, nums[i]);
    min = Math.min(placeholder, nums[i] * min, nums[i]);
    result = Math.max(result, max);
  }
  return result;
}
