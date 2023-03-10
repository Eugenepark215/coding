function solution(inputArray: number[], k: number): number {
  let highest = 0;
  for (let i = 0; i < inputArray.length; i++) {
    let current = 0;
    for (let j = 0; j < k; j++) {
      current += inputArray[i + j];
      if (current > highest) {
        highest = current;
      }
    }
  }
  return highest;
}

solution([12, 34, 56, 78], 3);
