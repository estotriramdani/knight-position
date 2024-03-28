import { Chessboard } from '@/components/chessboard';
import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-primary-foreground min-h-screen flex flex-col justify-center items-center">
      <Chessboard />
    </div>
  );
}
