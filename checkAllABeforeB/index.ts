function checkString(s: string): boolean {
  let beforeA = false;
  for (let i = 0; i < s.length; i++) {
    if (beforeA && s[i] === 'a') {
      return false;
    } if (s[i] === 'b') {
      beforeA = true;
    }
  }
  return true;
}

checkString('aaabbb');
