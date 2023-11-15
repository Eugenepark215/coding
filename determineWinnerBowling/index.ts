// 2 array arguements
// return 1, 2, 0
// return sum of array and return which array has larger sum 0 is draw
// if integer within array is 10 then for the values of the next 2 elements will be doubled
// iterate through for loop
// use variables to confirm condirionals
// if array[i] === 10 set conditional to true
// set counter variable
function isWinner(player1: number[], player2: number[]): number {
  let strike1 = false;
  let strike2 = false;
  let counter1 = 2;
  let counter2 = 2;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < player1.length; i++) {
    if (strike1 && counter1) {
      sum1 += (player1[i] * 2);
      counter1--;
      if (player1[i] === 10) {
        counter1 = 2;
      }
    } else if (player1[i] === 10) {
      strike1 = true;
      counter1 = 2;
      sum1 += player1[i];
    } else {
      sum1 += player1[i];
    }
  }
  for (let j = 0; j < player2.length; j++) {
    if (strike2 && counter2) {
      sum2 += (player2[j] * 2);
      counter2--;
      if (player2[j] === 10) {
        counter2 = 2;
      }
    } else if (player2[j] === 10) {
      strike2 = true;
      counter2 = 2;
      sum2 += player2[j];
    } else {
      sum2 += player2[j];
    }
  }
  if (sum1 === sum2) return 0;
  return sum1 > sum2 ? 1 : 2;
}
