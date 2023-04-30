// assuming there is exactly one solution
function twoSum(numbers, target) {
  var numberMap = new Map();
  for (var i = 0; i < numbers.length; i++) {
    var difference = target - numbers[i];
    if (numberMap.has(difference)) {
      return [numberMap.get(difference), i];
    }
    numberMap.set(numbers[i], i);
  }
  // will not return as loop will break from if statement - satisfies TS(2366)
  return [0];
}
