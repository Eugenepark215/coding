function kidsWithCandies(candies, extraCandies) {
  var newArray = [];
  var highestInitialValue = Math.max.apply(Math, candies);
  for (var i = 0; i < candies.length; i++) {
    if ((candies[i] + extraCandies) >= highestInitialValue) {
      newArray.push(true);
    } else {
      newArray.push(false);
    }
  }
  return newArray;
}
