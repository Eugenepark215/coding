function mostWordsFound(sentences) {
  var wordsArray = [];
  for (var i = 0; i < sentences.length; i++) {
    var splitArray = sentences[i].split(' ');
    wordsArray.push(splitArray.length);
  }
  return Math.max.apply(Math, wordsArray);
}
mostWordsFound(['alice and bob love leetcode', 'i think so too', 'this is great thanks very much']);
