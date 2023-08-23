function checkString(s) {
  var beforeA = false;
  for (var i = 0; i < s.length; i++) {
    if (beforeA && s[i] === 'a') {
      return false;
    }
    if (s[i] === 'b') {
      beforeA = true;
    }
  }
  return true;
}
checkString('aaabbb');
