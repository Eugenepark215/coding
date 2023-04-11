function runningSum(nums: number[]): number[] {
  const newArray :number[] = [];
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num += nums[i];
    newArray.push(num);
  }
  return newArray;
}
runningSum([3, 1, 2, 10, 1]);
