function largestGoodInteger(num: string): string {
  const array1:number[] = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i + 2] === num[i + 1] && num[i + 2] === num[i]) {
      array1.push(parseInt(num.slice(i, i + 3)));
    }
  }
  if (array1.length === 0) return '';
  if (Math.max(...array1) === 0) return '000';
  return Math.max(...array1).toString();
}
