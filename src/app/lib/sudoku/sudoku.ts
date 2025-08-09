export type Difficulty = 'easy' | 'medium' | 'hard';

const N = 9;
export const EMPTY_CELL = 0;

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function isSafe(grid: number[][], row: number, col: number, num: number): boolean {
  for (let x = 0; x < N; x++) {
    if (grid[row][x] === num || grid[x][col] === num) {
      return false;
    }
  }

  const startRow = row - (row % 3);
  const startCol = col - (col % 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i + startRow][j + startCol] === num) {
        return false;
      }
    }
  }

  return true;
}

function solveSudoku(grid: number[][]): boolean {
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (grid[row][col] === EMPTY_CELL) {
        const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        for (const num of nums) {
          if (isSafe(grid, row, col, num)) {
            grid[row][col] = num;
            if (solveSudoku(grid)) {
              return true;
            }
            grid[row][col] = EMPTY_CELL;
          }
        }
        return false;
      }
    }
  }
  return true;
}

export function generateSudoku(difficulty: Difficulty): { puzzle: number[][]; solution: number[][] } {
  const grid: number[][] = Array(N).fill(0).map(() => Array(N).fill(EMPTY_CELL));
  
  solveSudoku(grid);
  
  const solution = grid.map(row => [...row]);

  let cellsToRemove: number;
  switch (difficulty) {
    case 'easy':
      cellsToRemove = 40;
      break;
    case 'medium':
      cellsToRemove = 50;
      break;
    case 'hard':
      cellsToRemove = 60;
      break;
    default:
      cellsToRemove = 50;
  }

  const puzzle = solution.map(row => [...row]);
  let removed = 0;
  while(removed < cellsToRemove) {
    const row = Math.floor(Math.random() * N);
    const col = Math.floor(Math.random() * N);

    if (puzzle[row][col] !== EMPTY_CELL) {
        puzzle[row][col] = EMPTY_CELL;
        removed++;
    }
  }

  return { puzzle, solution };
}
