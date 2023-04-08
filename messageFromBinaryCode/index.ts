function solution(code: string): string {
  const eightLetterArray: string[] = [];
  let tempArray: string[] = [];
  for (let i = 0; i < code.length + 1; i++) {
    if (tempArray.length === 8) {
      eightLetterArray.push(tempArray.join(''));
      tempArray = [];
    }
    tempArray.push(code[i]);
  }
  function revise(eightBit: string[]) {
    let ascii = '';
    for (let k = 0; k < eightBit.length; k++) {
      ascii += String.fromCharCode(parseInt(eightBit[k], 2));
    }
    return ascii;
  }
  return revise(eightLetterArray);
}
solution('010010000110010101101100011011000110111100100001');
