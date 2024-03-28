import { expect, test } from 'vitest';
import { knightPositions } from './knight';

test('Test #1', () => {
  const pawnPositions = ['a1', 'b6', 'c3', 'e5', 'f8', 'h4'];
  const expectedPositions = ['g6', 'd7'];

  const result = knightPositions(pawnPositions);

  // ensure that the result contains the expected positions in any order
  const resultToObject = result.reduce((acc, pos) => {
    acc[pos] = true;
    return acc;
  }, {} as Record<string, boolean>);

  expectedPositions.forEach((pos) => {
    expect(resultToObject).toHaveProperty(pos);
  });
});

test('Test #2', () => {
  const pawnPositions = ['a1', 'b6', 'c3', 'f8', 'h4'];
  const expectedPositions = ['a4', 'd5', 'd7', 'g6'];

  const result = knightPositions(pawnPositions);

  // ensure that the result contains the expected positions in any order
  const resultToObject = result.reduce((acc, pos) => {
    acc[pos] = true;
    return acc;
  }, {} as Record<string, boolean>);

  expectedPositions.forEach((pos) => {
    expect(resultToObject).toHaveProperty(pos);
  });
});
