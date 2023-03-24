function solution(s: string): string {
  let encodeLine = '';
  let encodeLetter = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      encodeLetter++;
    } else if (s[i] !== s[i + 1]) {
      if (encodeLetter > 1) {
        encodeLine += encodeLetter.toString() + s[i];
      } else {
        encodeLine += s[i];
      }
      encodeLetter = 1;
    }
  }
  return encodeLine;
}

solution('wwwwwwwawwwwwww');
