'use client';

import { Lightbulb, Eraser } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Difficulty } from '@/app/lib/sudoku/sudoku';
import { cn } from '@/app/lib/utils';

interface GameControlsProps {
  time: string;
  hints: number;
  difficulty: Difficulty;
  onDifficultyChange: (diff: Difficulty) => void;
  onNewGame: () => void;
  onHint: () => void;
  onNumberInput: (num: number) => void;
  onErase: () => void;
  isSolved: boolean;
  isCellSelected: boolean;
}

export function GameControls({
  time,
  hints,
  difficulty,
  onDifficultyChange,
  onNewGame,
  onHint,
  onNumberInput,
  onErase,
  isSolved,
  isCellSelected,
}: GameControlsProps) {
  const numberPad = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const controlsDisabled = isSolved || !isCellSelected;

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-headline text-primary">Controls</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex justify-around rounded-lg bg-muted p-3 text-center">
          <div>
            <p className="text-sm text-muted-foreground">Time</p>
            <p className="font-mono text-2xl font-bold">{time}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Hints</p>
            <p className="font-mono text-2xl font-bold">{hints}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Select value={difficulty} onValueChange={(v) => onDifficultyChange(v as Difficulty)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={onNewGame} className="w-full">New Game</Button>
        </div>
        
        <Button onClick={onHint} disabled={hints <= 0 || isSolved || !isCellSelected}>
          <Lightbulb className="mr-2 h-4 w-4" />
          Use Hint
        </Button>

        <div className="grid grid-cols-3 gap-2">
          {numberPad.map((num) => (
            <Button
              key={num}
              variant="outline"
              size="lg"
              className="h-16 text-2xl"
              onClick={() => onNumberInput(num)}
              disabled={controlsDisabled}
            >
              {num}
            </Button>
          ))}
        </div>
        
        <Button
            variant="destructive"
            className="w-full"
            onClick={onErase}
            disabled={controlsDisabled}
          >
            <Eraser className="mr-2 h-4 w-4" />
            Erase
        </Button>
      </CardContent>
    </Card>
  );
}