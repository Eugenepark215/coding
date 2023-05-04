function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  let doingHW = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      doingHW++;
    }
  }
  return doingHW;
}
