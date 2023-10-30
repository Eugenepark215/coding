function getLucky(s: string, k: number): number {
  const splitArray: string[] | number[] = s.split('');
  let newArray: string[] = [];
  let counter = 0;
  for (let i = 0; i < splitArray.length; i++) {
    const current: string | number = parseInt(splitArray[i], 36) - 9;
    newArray.push(current.toString());
  }
  while (k > 0) {
    counter = 0;
    for (let j = 0; j < newArray.length; j++) {
      const currentNewArray: number = parseInt(newArray[j]);
      counter += currentNewArray;
    }
    const newCounter: string = counter.toString();
    newArray = newCounter.split('');
    counter = newArray.reduce((a, b) => a + parseInt(b), 0);
    --k;
  }
  return counter;
}
