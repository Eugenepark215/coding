function finalValueAfterOperations(operations: string[]): number {
  let value = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === '++X' || operations[i] === 'X++') {
      value++;
    } else {
      value--;
    }
  }
  return value;
}
