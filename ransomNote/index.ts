function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map();
  for (let i = 0; i < magazine.length; i++) {
    // iterate through string magazine
    if (map.has(magazine[i])) {
      // if map contains magazine[i] key set add 1 to value
      map.set(magazine[i], map.get(magazine[i]) + 1);
    } else {
      // else include key and set value to 1
      map.set(magazine[i], 1);
    }
  }
  for (let j = 0; j < ransomNote.length; j++) {
    // iterate through string ransom
    if (!map.has(ransomNote[j]) || map.get(ransomNote[j]) === 0) {
      // if map doesnt contain ransomNote[i] key or if get equals 0 return false
      return false;
    }
    // subtract from value ot correpsonding key
    map.set(ransomNote[j], map.get(ransomNote[j]) - 1);
  }
  return true;
}
canConstruct('aa', 'aab');
