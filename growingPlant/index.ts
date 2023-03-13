function solution(upSpeed: number, downSpeed: number, desiredHeight: number): number {
  let height = 0;
  let day = 0;
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
