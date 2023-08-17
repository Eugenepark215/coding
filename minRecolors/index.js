function minimumRecolors(blocks, k) {
  var minCount = Number.MAX_VALUE;
  // loop will start with 0 index
  for (var i = 0; i < blocks.length; i++) {
    var blackCount = 0;
    var count = 0;
    // loops through the block string dependent of index of outer loop
    for (var j = i; j < blocks.length; j++) {
      if (blocks[j] === 'B') {
        blackCount++;
      } else {
        blackCount++;
        count++;
      }
      if (blackCount === k) {
        // will set minCount to count and break loop
        // will cause the outer loop index to move forward and will set value of
        // minCount to the min of current value or count
        minCount = Math.min(minCount, count);
        break;
      }
    }
  }
  return minCount;
}
minimumRecolors('WBBWWBBWBW', 7);
