function solution(upSpeed, downSpeed, desiredHeight) {
  var height = 0;
  var day = 0;
  while (height <= desiredHeight) {
    day++;
    height += upSpeed;
    if (height >= desiredHeight) {
      break;
    }
    height -= downSpeed;
  }
  return day;
}
solution(100, 10, 910);
