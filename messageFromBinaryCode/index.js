function solution(code) {
  var eightLetterArray = [];
  var tempArray = [];
  for (var i = 0; i < code.length + 1; i++) {
    // once tempArray has length of 8 (8bit)
    if (tempArray.length === 8) {
      // push joined string value of tempArray into eightLetterArray
      eightLetterArray.push(tempArray.join(''));
      // reset temoArray
      tempArray = [];
    }
    tempArray.push(code[i]);
  }
  function revise(eightBit) {
    var ascii = '';
    for (var k = 0; k < eightBit.length; k++) {
      // for each string value in array change to utf-16 into ascii
      ascii += String.fromCharCode(parseInt(eightBit[k], 2));
    }
    return ascii;
  }
  return revise(eightLetterArray);
}
solution('010010000110010101101100011011000110111100100001');
