function solution(names) {
  var output = [];
  for (var i = 0; i < names.length; i++) {
    if (output.indexOf(names[i]) === -1) {
      output.push(names[i]);
    } else {
      var j = 1;
      while (output.indexOf(names[i] + '(' + j + ')') !== -1) {
        j++;
      }
      output.push(names[i] + '(' + j + ')');
    }
  }
  return output;
}
solution(['a(1)',
  'a(6)',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a']);
