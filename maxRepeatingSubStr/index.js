function maxRepeating(sequence, word) {
  var occurrences = 0;
  var wordToTest = word;
  while (true) {
    if (sequence.includes(wordToTest)) {
      // wordToTest is concatanted and checked to see if it is included
      wordToTest += word;
      occurrences++;
    } else {
      // if not included terminate loop
      break;
    }
  }
  return occurrences;
}
