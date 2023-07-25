function maxRepeating(sequence: string, word: string): number {
  let occurrences = 0;
  let wordToTest:string = word;
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
