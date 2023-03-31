function solution(text) {
  var patt = /[^a-z^A-Z]/;
  var newText = text.split(patt);
  var longest = newText.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });
  return longest;
}
solution('Ready, steady, go!');
