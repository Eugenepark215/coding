function solution(n: number): number {
  let nToString = n.toString();
  let degree = 0;
  while (nToString.length > 1) {
    degree++;
    let amount = 0;
    for (let i = 0; i < nToString.length; i++) {
      amount += parseInt(nToString[i]);
    }
    nToString = amount.toString();
  }
  return degree;
}

solution(777773);
