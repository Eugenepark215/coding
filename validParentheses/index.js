function isValid(s) {
  var bracketsMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  var openBracketsStack = [];
  for (var i = 0; i < s.length; i++) {
    if (['(', '[', '{'].includes(s[i])) {
      openBracketsStack.push(s[i]);
      /*
            value is popped from openBracketsStack when s[i] is closing bracket
            if value is unequal to the inverse of the closing bracket return false
            incorrect order of bracket or closing bracket without opening bracket
            */
    } else if (openBracketsStack.pop() !== bracketsMap[s[i]]) {
      return false;
    }
  }
  /*
    if openBracketsStack has remaining strings it will return false
    openBracketStack will clear if corresponding brackets match bracketsMap[s[i]] -line18
    */
  return !openBracketsStack.length;
}
