function removeStars(s) {
  var newString = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      newString.pop();
    } else {
      newString.push(s[i]);
    }
  }
  return newString.join('');
}
removeStars('erase*****');
