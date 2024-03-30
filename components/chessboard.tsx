'use client';

import Image from 'next/image';
import { useState } from 'react';
import { KNIGHT_IMAGE, PAWN_IMAGE } from '@/constants';
import { isHasItemChild, knightPositions } from '@/lib/knight';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export const Chessboard = () => {
  const [buttonState, setButtonState] = useState<'has-item' | 'clear'>('clear');
  const [pawns, setPawns] = useState<string[]>([]);
  const [knights, setKnights] = useState<string[]>([]);

  const handleSetPawns = (col: string) => {
    if (pawns.includes(col)) {
      setPawns(pawns.filter((pawn) => pawn !== col));
      return;
    }
    setPawns([...pawns, col]);
  };

  const handleClearPawns = () => {
    setPawns([]);
    setKnights([]);
    setButtonState('clear');
  };

  const handleFindKnightPositions = () => {
    const newKnights = knightPositions(pawns);

    setKnights(newKnights.filter((knight) => !pawns.includes(knight)));

    setButtonState('has-item');
  };

  return (
    <>
      <Alert className="w-[600px] mb-2">
        <AlertTitle className='flex gap-2 items-center'>
          <Info className='inline-block' /> Tips!
        </AlertTitle>
        <AlertDescription>Click on column to locate your pawns.</AlertDescription>
      </Alert>
      <div className="w-[600px] h-[600px] shadow-lg border-8 select-none">
        <div className="flex flex-col h-full">
          {Array.from({ length: 8 }).map((_, i) => {
            return (
              <div key={i} className="flex flex-1">
                {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((col, j) => {
                  return (
                    <div
                      onClick={
                        buttonState === 'clear' ? () => handleSetPawns(`${col}${8 - i}`) : undefined
                      }
                      role={buttonState === 'clear' ? 'button' : undefined}
                      key={j}
                      className={cn(
                        'relative flex-1 flex justify-center items-center',
                        i % 2 === j % 2 ? 'bg-yellow-100' : 'bg-yellow-500'
                      )}
                    >
                      {i === 7 && <div className="absolute bottom-1 left-1">{col}</div>}
                      {col === 'h' && <div className="absolute top-1 right-1">{8 - i}</div>}
                      {isHasItemChild(pawns, `${col}${8 - i}`) && (
                        <Image src={PAWN_IMAGE} alt="PAWN" width={40} height={40} />
                      )}
                      {isHasItemChild(knights, `${col}${8 - i}`) && (
                        <Image src={KNIGHT_IMAGE} alt="KNIGHT" width={40} height={40} />
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-3">
        <Button
          disabled={pawns.length === 0}
          onClick={buttonState === 'clear' ? handleFindKnightPositions : handleClearPawns}
        >
          {buttonState === 'clear' ? 'Find Possible Knight Positions' : 'Clear All'}
        </Button>
      </div>
    </>
  );
};
