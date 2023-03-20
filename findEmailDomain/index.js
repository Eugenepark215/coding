function solution(address) {
  var letters = address.split('');
  var domainArray = letters.slice(address.lastIndexOf('@') + 1);
  var domain = '';
  for (var i = 0; i < domainArray.length; i++) {
    domain += domainArray[i];
  }
  return domain;
}
solution('"very.unusual.@.unusual.com"@usual.com');
