function solution(address: string): string {
  return address.slice(address.lastIndexOf('@') + 1);
}
solution('"very.unusual.@.unusual.com"@usual.com');
