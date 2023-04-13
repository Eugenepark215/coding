function fizzBuzz(n: number): string[] {
  const newArray: string[] = [];
  for (let i = 1; i < n + 1; i++) {
    if (i % 15 === 0) {
      newArray.push('FizzBuzz');
    } else if (i % 3 === 0) {
      newArray.push('Fizz');
    } else if (i % 5 === 0) {
      newArray.push('Buzz');
    } else {
      newArray.push(i.toString());
    }
  }
  return newArray;
}
fizzBuzz(3);
