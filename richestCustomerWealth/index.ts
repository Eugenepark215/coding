function maximumWealth(accounts: number[][]): number {
  const sumArray:number[] = [];
  for (let i = 0; i < accounts.length; i++) {
    let num = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      num += accounts[i][j];
    }
    sumArray.push(num);
  }
  return Math.max(...sumArray);
}
maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]);
