function arrayRankTransform(arr: number[]): number[] {
  const shallow = arr.slice();
  const newSet = [...new Set(shallow)];
  const sortedSet = newSet.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1, (sortedSet.indexOf(arr[i]) + 1));
  }
  return arr;
}
