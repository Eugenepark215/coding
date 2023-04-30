// assuming there is exactly one solution
function twoSum(numbers: number[], target: number): number[] {

  const numberMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const difference = target - numbers[i];
    if (numberMap.has(difference)) {
      return [numberMap.get(difference), i];
    }
    numberMap.set(numbers[i], i);
  }
  // will not return as loop will break from if statement - satisfies TS(2366)
  return [0];
}
