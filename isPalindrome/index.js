function isPalindrome(s) {
  var stringsOnly = '';
  for (var i = 0; i < s.length; i++) {
    if (/^[A-Za-z0-9]+$/.test(s[i])) {
      stringsOnly += s[i].toLowerCase();
    }
  }
  var splitStringArray = stringsOnly.split('');
  var reverse = splitStringArray.reverse();
  var join = reverse.join('');
  return join === stringsOnly;
}
