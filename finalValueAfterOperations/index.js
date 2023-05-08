function finalValueAfterOperations(operations) {
  var value = 0;
  for (var i = 0; i < operations.length; i++) {
    if (operations[i] === '++X' || operations[i] === 'X++') {
      value++;
    } else {
      value--;
    }
  }
  return value;
}
