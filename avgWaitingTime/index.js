function averageWaitingTime(customers) {
  var sum = 0;
  var finishTime = customers[0][0];
  for (var i = 0; i < customers.length; i++) {
    var currentTime = customers[i][0];
    var waitTime = customers[i][1];
    if (currentTime > finishTime) {
      finishTime = currentTime;
    }
    finishTime += waitTime;
    sum += finishTime - currentTime;
  }
  return sum / customers.length;
}
