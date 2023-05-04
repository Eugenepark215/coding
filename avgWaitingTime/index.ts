function averageWaitingTime(customers: number[][]): number {
  const avgTimeArray: number[] = [];
  let finishTime = customers[0][0];
  for (let i = 0; i < customers.length; i++) {
    const currentTime = customers[i][0];
    const waitTime = customers[i][1];
    if (currentTime > finishTime) {
      finishTime = currentTime;
    }
    finishTime += waitTime;
    avgTimeArray.push(finishTime - currentTime);
  }
  const sum = avgTimeArray.reduce((a, b) => {
    return a + b;
  });

  return sum / avgTimeArray.length;
}
