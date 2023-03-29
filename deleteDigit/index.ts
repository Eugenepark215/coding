function solution(n: number): number {
  const numbersString: string[] = n.toString().split('');
  let shallowCopy: string[] = numbersString.slice();
  const newArray: number[] = [];
  for (let i = 0; i < numbersString.length; i++) {
    shallowCopy.splice(i, 1);
    newArray.push(parseInt(shallowCopy.join('')));
    shallowCopy = numbersString.slice();
  }
  return Math.max(...newArray);
}
solution(152);
