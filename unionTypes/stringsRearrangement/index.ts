function solution(inputArray: string[]): boolean {
  function differByOne(string1: string, string2: string) : boolean {
    let mismatches = 0;
    for (let i = 0; i < string1.length; i++) {
      if (string1[i] !== string2[i]) mismatches++;
    }
    return mismatches === 1;
  }
  function getPermutation(array: string[]) : string[][] {
    const fullLength: number = array.length;
    const sequence: string[] = [];
    const permutation: string[][] = [];
    function permute(a:string[]) {
      for (let i = 0; i < a.length; i++) {
        const str:string = a[i];
        sequence.push(str);
        if (sequence.length === fullLength) {
          permutation.push([...sequence]);
        } else {
          var remaining = [...a.slice(0, 1), ...a.slice(i + 1)];
          permute(remaining);
        }
        sequence.pop();
      }
    }
    permute(array);
    return permutation;
  }
  const sequences = getPermutation(inputArray);
  for (const sequence of sequences) {
    let possible = true;
    for (let i = 1; i < sequence.length; i++) {
      const thisOne:string = sequence[i];
      const previousOne:string = sequence[i - 1];
      if (!differByOne(thisOne, previousOne)) {
        possible = false;
        break;
      }
    }
    if (possible) return true;
  }
  return false;
}

solution(['aba', 'bbb', 'bab']);
export {};
