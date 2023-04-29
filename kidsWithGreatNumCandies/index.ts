function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const newArray: boolean[] = [];
  const highestInitialValue = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    if ((candies[i] + extraCandies) >= highestInitialValue) {
      newArray.push(true);
    } else {
      newArray.push(false);
    }
  }
  return newArray;
}
