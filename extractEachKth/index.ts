function solution(inputArray: number[], k: number): number[] {
  const newArray: number[] = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (i !== 0 && (i + 1) % k !== 0) {
      newArray.push(inputArray[i]);
    } else if (i === 0 && (i + 1) % k !== 0) {
      newArray.push(inputArray[i]);
    }
  }
  return newArray;
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
