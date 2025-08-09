import type { Tile as TileType } from '@/app/lib/tiles/types';
import TileComponent from './tile';

interface GameBoardProps {
    tiles: TileType[];
    onTileClick: (tile: TileType) => void;
    isFlippingBack: boolean;
}

export default function GameBoard({ tiles, onTileClick, isFlippingBack }: GameBoardProps) {
    return (
        <div className="grid grid-cols-6 gap-2" style={{ perspective: '1200px' }}>
            {tiles.map((tile) => (
                <TileComponent key={tile.id} tile={tile} onClick={onTileClick} isFlippingBack={isFlippingBack} />
            ))}
        </div>
    );
}
