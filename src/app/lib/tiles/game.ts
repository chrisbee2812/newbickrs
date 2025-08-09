import { ICONS } from '@/app/lib/tiles/icons';
import type { Tile } from '@/app/lib/tiles/types';

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function generateTiles(pairCount: number = 8): Tile[] {
  if (pairCount > ICONS.length) {
    throw new Error('Not enough icons for the requested number of pairs');
  }

  // Take the first `pairCount` icons from our list
  const selectedIcons = shuffle([...ICONS]).slice(0, pairCount);
  
  // Create two tiles for each selected icon
  const tilePairs = selectedIcons.flatMap((Icon) => {
    const symbol = (Icon as any).displayName || Icon.name;
    const tile = { Icon, symbol, state: 'default' as const };
    return [tile, tile];
  });

  // Shuffle the full deck of tiles
  const shuffledTiles = shuffle(tilePairs);

  // Assign a unique ID to each tile
  return shuffledTiles.map((tile, index) => ({
    ...tile,
    id: index,
  }));
}
