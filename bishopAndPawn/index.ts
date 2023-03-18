function solution(bishop: string, pawn: string): boolean {

  const board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  };
  const bishopX: number = board[bishop[0]];
  const bishopY: number = parseInt(bishop[1]);

  const pawnX: number = board[pawn[0]];
  const pawnY: number = parseInt(pawn[1]);

  if (bishopX + bishopY === pawnX + pawnY || bishopX + pawnY === bishopY + pawnX) {
    return true;
  }
  return false;
}
solution('a1', 'c3');
