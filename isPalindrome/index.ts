function isPalindrome(s: string): boolean {
  let stringsOnly = '';
  for (let i = 0; i < s.length; i++) {
    if (/^[A-Za-z0-9]+$/.test(s[i])) {
      stringsOnly += s[i].toLowerCase();
    }
  }

  const splitStringArray = [...stringsOnly].reverse().join('');

  return splitStringArray === stringsOnly;
}
