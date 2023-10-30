function getLucky(s, k) {
  var splitArray = s.split('');
  var newArray = [];
  var counter = 0;
  for (var i = 0; i < splitArray.length; i++) {
    var current = parseInt(splitArray[i], 36) - 9;
    newArray.push(current.toString());
  }
  while (k > 0) {
    counter = 0;
    for (var j = 0; j < newArray.length; j++) {
      var currentNewArray = parseInt(newArray[j]);
      counter += currentNewArray;
    }
    var newCounter = counter.toString();
    newArray = newCounter.split('');
    counter = newArray.reduce(function (a, b) { return a + parseInt(b); }, 0);
    --k;
  }
  return counter;
}
