import type { LucideIcon } from 'lucide-react';

export type TileState = 'default' | 'flipped' | 'matched';

export interface Tile {
  id: number;
  symbol: string;
  state: TileState;
  Icon: LucideIcon;
}
