function findingLHS(nums) {
  var map = {};
  var maxResultLength = 0;
  // assign values to map
  for (var i = 0, nums1 = nums; i < nums1.length; i++) {
    var num = nums1[i];
    // if value of map[num] exists the value is incremented, if it does not exist assign 0 and then assign value of 1
    map[num] = (map[num] || 0) + 1;
  }
  // loop through map
  for (var a = 0, b = Object.entries(map); a < b.length; a++) {
    var c = b[a]; var key = c[0]; var value = c[1];
    // if a key with a difference of 1 exists in map
    if (map[parseInt(key) - 1]) {
      // the maxResultLength is assigned the greater value of maxResultLength or the value of [key-1] + the value of current key
      maxResultLength = Math.max(maxResultLength, map[parseInt(key) - 1] + value);
    }
  }
  return maxResultLength;
}
findingLHS([1, 3, 2, 2, 5, 2, 3, 7]);
