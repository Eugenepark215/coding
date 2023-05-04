function averageWaitingTime(customers) {
  var avgTimeArray = [];
  var finishTime = customers[0][0];
  for (var i = 0; i < customers.length; i++) {
    var currentTime = customers[i][0];
    var waitTime = customers[i][1];
    if (currentTime > finishTime) {
      finishTime = currentTime;
    }
    finishTime += waitTime;
    avgTimeArray.push(finishTime - currentTime);
  }
  var sum = avgTimeArray.reduce(function (a, b) {
    return a + b;
  });
  return sum / avgTimeArray.length;
}
