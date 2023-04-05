function solution(names:string []) : string[] {
  const output = [];
  for (let i = 0; i < names.length; i++) {
    // iterate thtough string array
    if (output.indexOf(names[i]) === -1) {
      // if names[i] is not within output array, push
      output.push(names[i]);
    } else {
      let j = 1;
      while (output.indexOf(names[i] + '(' + j + ')') !== -1) {
        // else names[i] is within output array keep incrementing j
        // break until there is a value that is not within output array
        j++;
      }
      output.push(names[i] + '(' + j + ')');
    }
  }
  return output;
}
solution(['a(1)',
  'a(6)',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a']);
