function arrayRankTransform(arr: number[]): number[] {
  const map = new Map();
  const newSet = [...new Set(arr)];
  const sortedSet = newSet.sort((a, b) => a - b);
  // map through sortedSet elements and set map
  sortedSet.map((x, i) => map.set(x, i + 1));
  // map through arr and replace elements with the value of the elements that was set in map
  return arr.map(x => map.get(x));
}
