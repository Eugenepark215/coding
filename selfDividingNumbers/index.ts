function selfDividingNumbers(left: number, right: number): number[] {
  const newArray:number[] = [];
  for (let i = left; i < right + 1; i++) {
    const number:string = i.toString();
    const splitNumber:string[] = number.split('');
    if (!splitNumber.includes('0')) {
      let notHarmonius: boolean | undefined;
      for (let j = 0; j < splitNumber.length; j++) {
        if (i % parseInt(splitNumber[j]) !== 0) {
          notHarmonius = true;
          break;
        }
      } if (!notHarmonius) {
        newArray.push(i);
      }
    }
  }
  return newArray;
}

selfDividingNumbers(1, 22);
