function mostWordsFound(sentences: string[]): number {
  const wordsArray: number[] = [];
  for (let i = 0; i < sentences.length; i++) {
    const splitArray = sentences[i].split(' ');
    wordsArray.push(splitArray.length);
  }
  return Math.max(...wordsArray);
}

mostWordsFound(['alice and bob love leetcode', 'i think so too', 'this is great thanks very much']);
