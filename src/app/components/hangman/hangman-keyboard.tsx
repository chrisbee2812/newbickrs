import { Button } from "@/app/components/ui/button";

const KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  onSelectLetter: (letter: string) => void;
  disabled?: boolean;
};

export function Keyboard({ activeLetters, inactiveLetters, onSelectLetter, disabled = false }: KeyboardProps) {
  return (
    <div className="grid grid-cols-7 sm:grid-cols-9 gap-1 self-stretch max-w-full mx-auto">
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <Button
            key={key}
            size="sm"
            variant={isActive ? "default" : isInactive ? "destructive" : "outline"}
            className={`text-sm sm:text-base font-bold transition-all duration-300 h-10 aspect-square p-0
              ${isActive ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}
              ${isInactive ? 'bg-accent text-accent-foreground opacity-70 hover:bg-accent/90' : ''}
            `}
            onClick={() => onSelectLetter(key)}
            disabled={isActive || isInactive || disabled}
            aria-label={`Guess letter ${key}`}
          >
            {key}
          </Button>
        );
      })}
    </div>
  );
}
