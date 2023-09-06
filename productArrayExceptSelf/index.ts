function productExceptSelf(nums: number[]): number[] {
  const answerArray: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const numsArray: number[] = [...nums];
    numsArray.splice(i, 1);
    let inital = numsArray[0];
    for (let j = 1; j < numsArray.length; j++) {
      inital *= numsArray[j];
    }
    answerArray.push(inital);
  }
  return answerArray;
}

productExceptSelf([1, 2, 3, 4]);
