function knightPositions(pawnPositions: string[]): string[] {
  const board: number[][] = Array(8)
    .fill(0)
    .map(() => Array(8).fill(0));
  const knightMoves: number[][] = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  const positions: string[] = [];
  let maxPawns = 0;

  for (const pos of pawnPositions) {
    const x = pos.charCodeAt(0) - 'a'.charCodeAt(0);
    const y = Number(pos[1]) - 1;
    board[x][y] = 1;
  }

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let pawns = 0;
      for (const move of knightMoves) {
        const x = i + move[0];
        const y = j + move[1];
        if (x >= 0 && x < 8 && y >= 0 && y < 8 && board[x][y] === 1) {
          pawns++;
        }
      }
      if (pawns > maxPawns) {
        maxPawns = pawns;
        positions.length = 0;
      }
      if (pawns === maxPawns) {
        positions.push(String.fromCharCode('a'.charCodeAt(0) + i) + (j + 1));
      }
    }
  }

  return positions;
}
