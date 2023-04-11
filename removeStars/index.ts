function removeStars(s:string) :string {
  const newString:string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      newString.pop();
    } else {
      newString.push(s[i]);
    }
  }
  return newString.join('');
}
removeStars('erase*****');
