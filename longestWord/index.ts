function solution(text: string): string {
  const patt = /[^a-z^A-Z]/;
  const newText: string[] = text.split(patt);
  const longest = newText.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });
  return longest;
}
solution('Ready, steady, go!');
