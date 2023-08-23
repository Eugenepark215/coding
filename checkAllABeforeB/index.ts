function checkString(s: string): boolean {
  if (!s.includes('a') || !s.includes('b')) return true;
  const splitString = s.split('');
  while (splitString[0] === 'a') {
    splitString.shift();
  }
  if (splitString.includes('a')) return false;
  return true;
}

checkString('aaabbb');
