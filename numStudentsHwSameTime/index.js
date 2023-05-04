function busyStudent(startTime, endTime, queryTime) {
  var doingHW = 0;
  for (var i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      doingHW++;
    }
  }
  return doingHW;
}
