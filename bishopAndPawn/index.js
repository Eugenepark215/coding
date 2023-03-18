function solution(bishop, pawn) {
  var board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  };
  var bishopX = board[bishop[0]];
  var bishopY = parseInt(bishop[1]);
  var pawnX = board[pawn[0]];
  var pawnY = parseInt(pawn[1]);
  if (bishopX + bishopY === pawnX + pawnY || bishopX + pawnY === bishopY + pawnX) {
    return true;
  }
  return false;
}
solution('a1', 'c3');
