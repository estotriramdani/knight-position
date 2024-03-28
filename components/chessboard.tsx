'use client';

import { KNIGHT_IMAGE } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const Chessboard = () => {
  return (
    <div className="w-[600px] h-[600px] shadow-lg border-8">
      <div className="flex flex-col h-full">
        {Array.from({ length: 8 }).map((_, i) => {
          return (
            <div key={i} className="flex flex-1">
              {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((_, j) => {
                return (
                  <div
                    key={j}
                    className={cn(
                      'flex-1 flex justify-center items-center',
                      i % 2 === j % 2 ? 'bg-yellow-100' : 'bg-yellow-500'
                    )}
                  >
                    <Image src={KNIGHT_IMAGE} alt="KNIGHT" width={40} height={40} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
