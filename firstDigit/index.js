function solution(inputString) {
  for (var i = 0; i < inputString.length; i++) {
    if (!isNaN(parseInt(inputString[i]))) {
      return inputString[i];
    }
  }
}
solution('var_1__Int');
