'use client';

import { KNIGHT_IMAGE, PAWN_IMAGE } from '@/constants';
import { isHasItemChild } from '@/lib/knight';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const pawns = ['a1', 'b6', 'c3', 'e5', 'f8', 'h4'];

export const Chessboard = () => {
  return (
    <>
      <div className="w-[600px] h-[600px] shadow-lg border-8">
        <div className="flex flex-col h-full">
          {Array.from({ length: 8 }).map((_, i) => {
            return (
              <div key={i} className="flex flex-1">
                {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((col, j) => {
                  return (
                    <div
                      role="cell"
                      key={j}
                      className={cn(
                        'relative flex-1 flex justify-center items-center',
                        i % 2 === j % 2 ? 'bg-yellow-100' : 'bg-yellow-500'
                      )}
                    >
                      {i === 7 && <div className="absolute bottom-1 left-1">{col}</div>}
                      {col === 'h' && <div className="absolute top-1 right-1">{i + 1}</div>}
                      {isHasItemChild(pawns, `${col}${i + 1}`, 'pawn') && (
                        <Image src={PAWN_IMAGE} alt="PAWN" width={40} height={40} />
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Button>Find Possible Knight Positions</Button>
      </div>
    </>
  );
};
