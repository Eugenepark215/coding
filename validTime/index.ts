function solution(time: string): boolean {
  const splitTime = time.split(':');
  if (parseInt(splitTime[0]) >= 24 || parseInt(splitTime[1]) >= 60) {
    return false;
  }
  return true;
}
solution('13:58');
