import { memo } from 'react';
import { cn } from '@/app/lib/utils';
import type { Tile } from '@/app/lib/tiles/types';
import { Card, CardContent } from '@/app/components/ui/card';
import { Puzzle } from 'lucide-react';

interface TileProps {
  tile: Tile;
  onClick: (tile: Tile) => void;
  isFlippingBack: boolean;
}

const TileComponent = memo(({ tile, onClick, isFlippingBack }: TileProps) => {
  const isFlipped = tile.state === 'flipped' || tile.state === 'matched';
  const isMatched = tile.state === 'matched';

  const handleClick = () => {
    if (!isFlipped && !isFlippingBack && !isMatched) {
      onClick(tile);
    }
  };

  return (
    <div className="aspect-square w-20 h-20">
        <div
        className={cn(
            'relative h-full w-full cursor-pointer transition-transform duration-500 [transform-style:preserve-3d]',
            {
            '[transform:rotateY(180deg)]': isFlipped,
            'cursor-default': isFlippingBack || isMatched,
            }
        )}
        onClick={handleClick}
        >
        {/* Front of card (icon) */}
        <Card
            className={cn(
            'absolute h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center',
            isMatched && 'transition-all duration-300 ease-in-out opacity-50 scale-95 border-primary/50',
            isFlipped && !isMatched && 'border-primary'
            )}
        >
            <CardContent className="p-0">
                <tile.Icon className="h-10 w-10 text-primary" />
            </CardContent>
        </Card>
        {/* Back of card (question mark) */}
        <Card className="absolute h-full w-full [backface-visibility:hidden] flex items-center justify-center bg-secondary hover:bg-accent/20 transition-colors">
            <CardContent className="p-0">
                <Puzzle className="h-10 w-10 text-muted-foreground" />
            </CardContent>
        </Card>
        </div>
    </div>
  );
});

TileComponent.displayName = 'Tile';
export default TileComponent;
