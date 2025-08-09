type WordDisplayProps = {
  word: string;
  guessedLetters: string[];
  reveal?: boolean;
};

export function WordDisplay({ word, guessedLetters, reveal = false }: WordDisplayProps) {
  // Dynamically adjust font size based on word length to prevent wrapping
  const fontSize = word.length > 10 ? 'text-3xl' : 'md:text-5xl text-4xl';

  return (
    <div className={`flex gap-1 sm:gap-2 justify-center font-headline font-bold tracking-widest ${fontSize} overflow-x-auto whitespace-nowrap pb-2`}>
      {word.split('').map((letter, index) => (
        <span
          key={index}
          className="border-b-4 md:border-b-8 border-foreground flex items-center justify-center h-[1.5em] min-w-[1.2em]"
        >
          <span
            className="transition-opacity duration-300 ease-in-out"
            style={{
              visibility: guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden',
              opacity: guessedLetters.includes(letter) || reveal ? 1 : 0,
              color: !guessedLetters.includes(letter) && reveal ? 'hsl(var(--destructive))' : 'hsl(var(--foreground))',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
