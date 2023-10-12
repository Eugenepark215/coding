function makeFancyString(s) {
  var counter = 0;
  var currentString = s[0];
  var newString = '';
  for (var i = 0; i < s.length; i++) {
    if (currentString === s[i]) {
      if (counter < 2) {
        counter++;
        newString += s[i];
      }
    } else {
      newString += s[i];
      counter = 1;
      currentString = s[i];
    }
  }
  return newString;
}
makeFancyString('aaabbaaa');
// given string s return a new string that doesnt contain 3 same consecutive letters
// use for loop to iterate through string s
// create variable that will count the number of occurences
// create variable that will reference the letter being referenced
// create variable arrat that will hold values of s in respect to condition
// conditional to check if current is equal to string[index]
// nested conditional that will check the value of counter that will add to counter and push value into Array
// else condtional that will set counter to 1 and set reference vairable to s[index]
// rerun new array
