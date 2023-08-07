var findLHS = function (nums) {
  const map = {};
  let maxResultLength = 0;
  // assign values to map
  for (const num of nums) {
    // if value of map[num] exists the value is incremented, if it does not exist assign 0 and then assign value of 1
    map[num] = (map[num] || 0) + 1;
  }

  // loop through map
  for (const [key, value] of Object.entries(map)) {
  // if a key with a difference of 1 exists in map
    if (map[key - 1]) {
      // the maxResultLength is assigned the greater value of maxResultLength or the value of [key-1] + the value of current key
      maxResultLength = Math.max(maxResultLength, map[key - 1] + value);
    }
  }

  return maxResultLength;
};

findLHS([1, 3, 2, 2, 5, 2, 3, 7]);
