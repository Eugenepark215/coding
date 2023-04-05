function solution(names: string[]): string[] {
  interface objectName {
    [key: string]: {
      name: string
      amount: number
    };
  }
  const newArray = [];
  const nameObject: objectName = {};
  for (let i = 0; i < names.length; i++) {
    if (!nameObject[names[i]]) {
      nameObject[names[i]] = { name: `${names[i]}`, amount: 1 };
      if (newArray.includes(names[i])) {
        newArray.push(nameObject[names[i]].name + `(${nameObject[names[i]].amount})`.toString());
      } else {
        newArray.push(nameObject[names[i]].name);
      }
    } else if (newArray.includes(nameObject[names[i]].name + `(${nameObject[names[i]].amount})`.toString())) {
      if (newArray.includes(nameObject[names[i]].name + `(${nameObject[names[i]].amount + 1})`.toString())) {
        nameObject[names[i]].amount += 2;
      } else {
        nameObject[names[i]].amount++;
      }
      newArray.push(nameObject[names[i]].name + `(${nameObject[names[i]].amount})`.toString());
    } else {
      newArray.push(nameObject[names[i]].name + `(${nameObject[names[i]].amount})`.toString());
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
