function solution(st:string) :string {
  let i = 0;
  let stringSplitArray:string[];
  // while loop + conditional statement that checks if st is palindrome
  while (st !== st.split('').reverse().join('')) {
    stringSplitArray = st.split('');
    // string is concatenated at the same index starting from 1st letter in st
    stringSplitArray.splice(st.length - i, 0, st[i]);
    st = stringSplitArray.join('');
    i++;
  }
  return st;
}
solution('aaaaba');
