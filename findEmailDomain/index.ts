function solution(address: string): string {
  const letters: string[] = address.split('');
  const domainArray: string[] = letters.slice(address.lastIndexOf('@') + 1);
  let domain = '';
  for (let i = 0; i < domainArray.length; i++) {
    domain += domainArray[i];
  }
  return domain;
}
solution('"very.unusual.@.unusual.com"@usual.com');
