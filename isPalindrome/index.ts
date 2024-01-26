function isPalindrome(s: string): boolean {
  let stringsOnly = '';
  let reverse = '';
  for (let i = 0; i < s.length; i++) {
    if (/^[A-Za-z0-9]+$/.test(s[i])) {
      stringsOnly += s[i].toLowerCase();
      reverse = s[i].toLowerCase() + reverse;
    }
  }

  return reverse === stringsOnly;
}
