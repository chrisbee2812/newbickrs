"use client";

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { generateTiles } from '@/app/lib/tiles/game';
import type { Tile } from '@/app/lib/tiles/types';
import GameBoard from '@/app/components/tiles/game-board';
import GameOverDialog from '@/app/components/tiles/game-over-dialog';
import { Timer, Star, Repeat, Puzzle } from 'lucide-react';

const GAME_DURATION = 120; // 2 minutes
const PAIR_COUNT = 18; // 6x6 grid
const MISMATCH_DELAY = 750; // ms

export default function Home() {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'won' | 'lost'>('idle');
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [selectedTiles, setSelectedTiles] = useState<Tile[]>([]);
  const [isFlippingBack, setIsFlippingBack] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);

  const startGame = useCallback(() => {
    setTiles(generateTiles(PAIR_COUNT));
    setScore(0);
    setSelectedTiles([]);
    setTimeLeft(GAME_DURATION);
    setGameState('playing');
  }, []);

  useEffect(() => {
    if (gameState !== 'playing') return;

    if (timeLeft === 0) {
      setGameState('lost');
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [gameState, timeLeft]);

  useEffect(() => {
    if (selectedTiles.length < 2) return;

    const [first, second] = selectedTiles;

    if (first.symbol === second.symbol) {
      setTiles((prevTiles) =>
        prevTiles.map((tile) =>
          tile.symbol === first.symbol ? { ...tile, state: 'matched' } : tile
        )
      );
      setScore((s) => s + 10);
      setSelectedTiles([]);
    } else {
      setIsFlippingBack(true);
      setTimeout(() => {
        setTiles((prevTiles) =>
          prevTiles.map((tile) =>
            (tile.id === first.id || tile.id === second.id) ? { ...tile, state: 'default' } : tile
          )
        );
        setSelectedTiles([]);
        setIsFlippingBack(false);
      }, MISMATCH_DELAY);
    }
  }, [selectedTiles]);

  useEffect(() => {
    if (gameState !== 'playing' || tiles.length === 0) return;
    const allMatched = tiles.every((tile) => tile.state === 'matched');
    if (allMatched) {
      setGameState('won');
      setScore((s) => s + timeLeft); // Time bonus
    }
  }, [tiles, gameState, timeLeft]);

  const handleTileClick = (clickedTile: Tile) => {
    if (isFlippingBack || selectedTiles.length >= 2 || clickedTile.state !== 'default') {
      return;
    }
    
    const newTile = { ...clickedTile, state: 'flipped' as const };
    setTiles((prevTiles) =>
      prevTiles.map((tile) =>
        tile.id === clickedTile.id ? newTile : tile
      )
    );
    setSelectedTiles((prev) => [...prev, newTile]);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-8">
      <Card className="w-full max-w-4xl shadow-2xl rounded-2xl">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center items-center gap-2">
             <Puzzle className="h-8 w-8 text-primary" />
            <CardTitle className="text-4xl font-headline font-bold tracking-tight text-primary">TileTime</CardTitle>
          </div>
          <CardDescription className="text-base text-muted-foreground pt-1">
            Match all the pairs before time runs out!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center justify-between rounded-lg bg-secondary p-3 text-foreground">
            <div className="flex items-center gap-2 text-base font-semibold">
              <Timer className="h-5 w-5 text-accent" />
              <span>Time: {formatTime(timeLeft)}</span>
            </div>
            <div className="flex items-center gap-2 text-base font-semibold">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>Score: {score}</span>
            </div>
            <Button onClick={startGame} variant="outline" size="sm" className="shadow-sm">
              <Repeat className="mr-2 h-4 w-4" />
              Restart
            </Button>
          </div>

          {gameState === 'idle' ? (
            <div className="flex h-[360px] flex-col items-center justify-center gap-6 rounded-lg bg-secondary/50 p-8 text-center">
              <h2 className="text-3xl font-bold">Welcome to TileTime!</h2>
              <p className="text-muted-foreground max-w-sm">
                Test your memory and speed. Flip tiles to find matching pairs and clear the board as fast as you can.
              </p>
              <Button size="lg" onClick={startGame} className="shadow-lg">Start Game</Button>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <GameBoard tiles={tiles} onTileClick={handleTileClick} isFlippingBack={isFlippingBack} />
            </div>
          )}
        </CardContent>
      </Card>
      <GameOverDialog
        open={gameState === 'won' || gameState === 'lost'}
        status={gameState}
        score={score}
        onRestart={startGame}
      />
    </main>
  );
}
