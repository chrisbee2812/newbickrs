'use client';

import { useState, useEffect, useCallback } from 'react';
import { SudokuBoard } from '@/app/components/sudoku/sudoku-board';
import { GameControls } from '@/app/components/sudoku/game-controls';
import { generateSudoku, Difficulty, EMPTY_CELL } from '@/app/lib/sudoku/sudoku';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/app/components/ui/alert-dialog';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';

export default function SudoSolvePage() {
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [puzzle, setPuzzle] = useState<number[][] | null>(null);
  const [solution, setSolution] = useState<number[][] | null>(null);
  const [grid, setGrid] = useState<number[][] | null>(null);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [time, setTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [hints, setHints] = useState(3);
  const [isSolved, setIsSolved] = useState(false);
  const [mistakes, setMistakes] = useState<Record<string, boolean>>({});
  const [hasStarted, setHasStarted] = useState(false);

  const startNewGame = useCallback((newDifficulty: Difficulty) => {
    const { puzzle: newPuzzle, solution: newSolution } = generateSudoku(newDifficulty);
    setPuzzle(newPuzzle);
    setSolution(newSolution);
    setGrid(newPuzzle.map(row => [...row]));
    setSelectedCell(null);
    setTime(0);
    setHints(3);
    setIsSolved(false);
    setIsTimerRunning(true);
    setMistakes({});
    setHasStarted(true);
  }, []);

  useEffect(() => {
    if (hasStarted) {
      startNewGame(difficulty);
    }
  }, [difficulty, startNewGame, hasStarted]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && !isSolved) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, isSolved]);

  const checkSolution = useCallback(() => {
    if (!grid || !solution) return;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j] === EMPTY_CELL || grid[i][j] !== solution[i][j]) {
          return;
        }
      }
    }
    setIsSolved(true);
    setIsTimerRunning(false);
  }, [grid, solution]);

  useEffect(() => {
    checkSolution();
  }, [grid, checkSolution]);

  const handleCellSelect = useCallback((pos: { row: number; col: number } | null) => {
    if (isSolved) return;
    setSelectedCell(pos);
  }, [isSolved]);

  const handleNumberInput = useCallback((num: number) => {
    if (!selectedCell || !grid || !puzzle || isSolved) return;
    const { row, col } = selectedCell;

    if (puzzle[row][col] !== EMPTY_CELL) return; // Can't change initial numbers

    const newGrid = grid.map(r => [...r]);
    newGrid[row][col] = num;
    setGrid(newGrid);

    const newMistakes = { ...mistakes };
    const key = `${row}-${col}`;
    if (solution && newGrid[row][col] !== solution[row][col]) {
      newMistakes[key] = true;
    } else {
      delete newMistakes[key];
    }
    setMistakes(newMistakes);

  }, [selectedCell, grid, puzzle, solution, mistakes, isSolved]);

  const handleErase = useCallback(() => {
    if (!selectedCell || !grid || !puzzle || isSolved) return;
    const { row, col } = selectedCell;
    if (puzzle[row][col] !== EMPTY_CELL) return;

    const newGrid = grid.map(r => [...r]);
    newGrid[row][col] = EMPTY_CELL;
    setGrid(newGrid);

    const newMistakes = { ...mistakes };
    const key = `${row}-${col}`;
    delete newMistakes[key];
    setMistakes(newMistakes);
  }, [selectedCell, grid, puzzle, mistakes, isSolved]);

  const handleHint = useCallback(() => {
    if (hints <= 0 || !selectedCell || !grid || !solution || isSolved) return;

    const { row, col } = selectedCell;
    if (grid[row][col] === solution[row][col]) return; // Already correct

    const newGrid = grid.map(r => [...r]);
    newGrid[row][col] = solution[row][col];
    setGrid(newGrid);
    setHints(h => h - 1);

    const newMistakes = { ...mistakes };
    const key = `${row}-${col}`;
    delete newMistakes[key];
    setMistakes(newMistakes);
  }, [hints, selectedCell, grid, solution, mistakes, isSolved]);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  if (!hasStarted) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 font-body antialiased">
        <Card className="w-full max-w-sm shadow-2xl">
          <CardHeader>
            <CardTitle className="text-center font-headline text-4xl font-bold text-primary">
              SudoSolve
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="space-y-2">
              <label htmlFor="difficulty-select" className="text-sm font-medium text-muted-foreground">
                Select Difficulty
              </label>
              <Select value={difficulty} onValueChange={(v) => setDifficulty(v as Difficulty)}>
                <SelectTrigger id="difficulty-select" className="w-full">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button size="lg" className="w-full" onClick={() => startNewGame(difficulty)}>
              Start Game
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  if (!grid || !puzzle || !solution) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p>Loading SudoSolve...</p>
      </div>
    );
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 font-body antialiased lg:p-8">
        <div className="w-full max-w-5xl">
            <h1 className="mb-6 text-center font-headline text-4xl font-bold text-primary md:text-5xl">
                SudoSolve
            </h1>
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
                <div className="w-full max-w-md">
                    <SudokuBoard
                        grid={grid}
                        initialPuzzle={puzzle}
                        selectedCell={selectedCell}
                        onCellSelect={handleCellSelect}
                        mistakes={mistakes}
                        isSolved={isSolved}
                    />
                </div>
                <div className="w-full max-w-xs flex-shrink-0">
                    <GameControls
                        time={formatTime(time)}
                        hints={hints}
                        difficulty={difficulty}
                        onDifficultyChange={setDifficulty}
                        onNewGame={() => startNewGame(difficulty)}
                        onHint={handleHint}
                        onNumberInput={handleNumberInput}
                        onErase={handleErase}
                        isSolved={isSolved}
                        isCellSelected={!!selectedCell && puzzle[selectedCell.row][selectedCell.col] === EMPTY_CELL}
                    />
                </div>
            </div>
        </div>
      </main>

      <AlertDialog open={isSolved}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Congratulations!</AlertDialogTitle>
            <AlertDialogDescription>
              You've solved the puzzle in {formatTime(time)}!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => startNewGame(difficulty)}>Play Again</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
