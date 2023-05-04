function averageWaitingTime(customers: number[][]): number {
  let sum = 0;
  let finishTime = customers[0][0];
  for (let i = 0; i < customers.length; i++) {
    const currentTime = customers[i][0];
    const waitTime = customers[i][1];
    if (currentTime > finishTime) {
      finishTime = currentTime;
    }
    finishTime += waitTime;
    sum += finishTime - currentTime;
  }
  return sum / customers.length;
}
