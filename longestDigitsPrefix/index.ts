function solution(inputString: string): string {
  return inputString.match(/^\d*/)[0];
}

solution('123aa1');
