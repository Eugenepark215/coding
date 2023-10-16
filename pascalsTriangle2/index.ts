// given an integer,n, return an array that contains the elemennts:number of the nth row of a pascals triangle
// loop that traverses down pascals triangle
// create variable that will be placeholder to hold values of triangle
// once the final loop occurs place values of arary
function getRow(rowIndex: number): number[] {
  // if number is 0 return [1];
  if (!rowIndex) return [1];

  let res = [1, 1];
  // loop will continue until rowIndex = 0
  while (--rowIndex) {
    const next :number[] = [];

    for (let i = 0; i < res.length - 1; i++) {
      // the sum of adjacent number in element will be pushed into next
      next.push(res[i] + res[i + 1]);
    }
    // next array used also a reference
    // res will equal the current next that was modified preloop
    res = [1, ...next, 1];
  }
  return res;
}
getRow(4);
