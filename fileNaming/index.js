function solution(names) {
  var newArray = [];
  var nameObject = {};
  for (var i = 0; i < names.length; i++) {
    if (!nameObject[names[i]]) {
      nameObject[names[i]] = { name: ''.concat(names[i]), amount: 1 };
      if (newArray.includes(names[i])) {
        newArray.push(nameObject[names[i]].name + '('.concat(nameObject[names[i]].amount, ')').toString());
      } else {
        newArray.push(nameObject[names[i]].name);
      }
    } else {
      newArray.push(nameObject[names[i]].name + '('.concat(nameObject[names[i]].amount, ')').toString());
      nameObject[names[i]].amount++;
    }
  }
  return newArray;
}
solution(['a(1)',
  'a(6)',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a']);
