'use client';

import { cn } from '@/app/lib/utils';
import { EMPTY_CELL } from '@/app/lib/sudoku/sudoku';

interface SudokuBoardProps {
  grid: number[][];
  initialPuzzle: number[][];
  selectedCell: { row: number; col: number } | null;
  onCellSelect: (pos: { row: number; col: number }) => void;
  mistakes: Record<string, boolean>;
  isSolved: boolean;
}

export function SudokuBoard({
  grid,
  initialPuzzle,
  selectedCell,
  onCellSelect,
  mistakes,
  isSolved,
}: SudokuBoardProps) {

  const handleCellClick = (row: number, col: number) => {
    if (isSolved) return;
    onCellSelect({ row, col });
  };
  
  const getCellClasses = (row: number, col: number) => {
    const isInitial = initialPuzzle[row][col] !== EMPTY_CELL;
    const isSelected = selectedCell?.row === row && selectedCell?.col === col;
    const isInSameRowCol = selectedCell && (selectedCell.row === row || selectedCell.col === col);
    const isInSameBox = selectedCell && Math.floor(selectedCell.row / 3) === Math.floor(row / 3) && Math.floor(selectedCell.col / 3) === Math.floor(col / 3);
    const isHighlighted = isInSameRowCol || isInSameBox;
    const isMistake = mistakes[`${row}-${col}`];
    const hasSameValue = selectedCell && grid[row][col] !== EMPTY_CELL && grid[row][col] === grid[selectedCell.row][selectedCell.col];

    return cn(
      'flex aspect-square h-full w-full items-center justify-center rounded-md text-2xl font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
      'border',
      col % 3 === 2 && col !== 8 && 'border-r-2 border-r-primary/50',
      row % 3 === 2 && row !== 8 && 'border-b-2 border-b-primary/50',
      isInitial ? 'text-foreground' : 'text-primary',
      isHighlighted && 'bg-primary/10',
      hasSameValue && !isSelected && 'bg-primary/20',
      isSelected && 'bg-primary/30 ring-2 ring-primary',
      isMistake && 'bg-accent/70 text-white animate-cell-error',
      isInitial ? 'cursor-default' : 'hover:bg-primary/20 cursor-pointer',
      isSolved && 'bg-green-100 text-green-800'
    );
  };
  
  return (
    <div className="grid grid-cols-9 grid-rows-9 gap-1 rounded-lg bg-card p-2 shadow-lg" data-ai-hint="sudoku grid">
      {grid.map((row, rowIndex) =>
        row.map((cellValue, colIndex) => (
          <button
            key={`${rowIndex}-${colIndex}`}
            onClick={() => handleCellClick(rowIndex, colIndex)}
            className={getCellClasses(rowIndex, colIndex)}
            aria-label={`Cell ${rowIndex + 1}, ${colIndex + 1}, value ${cellValue === EMPTY_CELL ? 'empty' : cellValue}`}
            disabled={isSolved || initialPuzzle[rowIndex][colIndex] !== EMPTY_CELL}
          >
            {cellValue !== EMPTY_CELL ? cellValue : ''}
          </button>
        ))
      )}
    </div>
  );
}

