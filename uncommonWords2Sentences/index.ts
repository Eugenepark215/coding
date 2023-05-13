function uncommonFromSentences(s1: string, s2: string): string[] {
  // values in set occur only once
  const wordSet = new Set<string>();
  const removed = new Set<string>();
  const combined = `${s1} ${s2}`.split(' ');

  for (const word of combined) {
    if (wordSet.has(word) || removed.has(word)) {
      wordSet.delete(word);
      removed.add(word);
    } else {
      wordSet.add(word);
    }
  }
  // return values of wordSet in array
  return [...wordSet];
}
