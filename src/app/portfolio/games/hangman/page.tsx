"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { getNewWord } from '@/app/portfolio/games/hangman/actionshm';
import { HangmanDrawing } from '@/app/components/hangman/hangman-drawing';
import { WordDisplay } from '@/app/components/hangman/word-display';
import { Keyboard } from '@/app/components/hangman/hangman-keyboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Loader2, Trophy, Frown, Play } from 'lucide-react';

const MAX_INCORRECT_GUESSES = 6;

export default function Home() {
  const [winLoss, setWinLoss] = useState({ wins: 0, losses: 0 });
  const [wordToGuess, setWordToGuess] = useState<string>('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gameState, setGameState] = useState<'not_started' | 'playing' | 'won' | 'lost'>('not_started');
  const [wordList, setWordList] = useState<string[]>([]);

  useEffect(() => {
    try {
        const storedStats = localStorage.getItem('hangmanWinLoss');
        if (storedStats) {
            setWinLoss(JSON.parse(storedStats));
        }
    } catch (error) {
        console.error("Failed to parse win/loss stats from localStorage", error);
        localStorage.removeItem('hangmanWinLoss');
    }
  }, []);

  useEffect(() => {
    try {
        localStorage.setItem('hangmanWinLoss', JSON.stringify(winLoss));
    } catch (error) {
        console.error("Failed to save win/loss stats to localStorage", error);
    }
  }, [winLoss]);

  const startNewGame = useCallback(async () => {
    setIsLoading(true);
    setGuessedLetters([]);
    setGameState('playing');
    const ratio = winLoss.losses === 0 ? winLoss.wins : winLoss.wins / winLoss.losses;
    const newWord = await getNewWord(ratio, wordList);
    if (wordList.includes(newWord)) {
      startNewGame();
    } else {
      setWordToGuess(newWord);
      setWordList(prev => [...prev, newWord]);
      setIsLoading(false);
    }
    
  }, [winLoss]);

  const incorrectLetters = useMemo(() => {
    if(!wordToGuess) return [];
    return guessedLetters.filter(letter => !wordToGuess.includes(letter));
  }, [guessedLetters, wordToGuess]);

  const correctLetters = useMemo(() => {
     if(!wordToGuess) return [];
    return guessedLetters.filter(letter => wordToGuess.includes(letter));
  }, [guessedLetters, wordToGuess]);

  const isWinner = useMemo(() => {
    if (gameState !== 'playing' || wordToGuess === '' || !wordToGuess) return false;
    return wordToGuess.split('').every(letter => guessedLetters.includes(letter));
  }, [guessedLetters, wordToGuess, gameState]);

  const isLoser = useMemo(() => {
    if (gameState !== 'playing') return false;
    return incorrectLetters.length >= MAX_INCORRECT_GUESSES;
  }, [incorrectLetters, gameState]);
  
  useEffect(() => {
    if (isWinner) {
      setGameState('won');
      setWinLoss(prev => ({ ...prev, wins: prev.wins + 1 }));
    } else if (isLoser) {
      setGameState('lost');
      setWinLoss(prev => ({ ...prev, losses: prev.losses + 1 }));
    }
  }, [isWinner, isLoser]);

  const addGuessedLetter = useCallback((letter: string) => {
    if (gameState !== 'playing' || guessedLetters.includes(letter.toUpperCase())) return;
    setGuessedLetters(currentLetters => [...currentLetters, letter.toUpperCase()]);
  }, [guessedLetters, gameState]);
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-2 sm:p-4 bg-background text-foreground font-body">
      <Card className="w-full max-w-2xl shadow-2xl bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-4xl md:text-5xl font-headline text-primary tracking-wider">
            Hangman
          </CardTitle>
          <div className="text-center text-muted-foreground">
            Wins: {winLoss.wins} | Losses: {winLoss.losses}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6 md:gap-8 px-2 sm:px-6">
          {gameState === 'not_started' ? (
             <div className="flex flex-col items-center justify-center min-h-[350px]">
                <h2 className="text-3xl font-bold font-headline mb-4">Welcome to Hangman!</h2>
                <Button onClick={startNewGame} size="lg">
                    <Play className="mr-2" /> Start Game
                </Button>
            </div>
          ) : (
            <>
              <div className="flex flex-col items-center justify-around gap-4 lg:gap-8 w-full">
                 <div className="relative flex-shrink-0">
                  {gameState !== 'playing' && !isLoading && (
                    <div className="absolute inset-0 bg-card/90 flex flex-col items-center justify-center z-10 rounded-lg backdrop-blur-sm animate-in fade-in-50">
                      {gameState === 'won' && <Trophy className="h-16 w-16 text-yellow-500" />}
                      {gameState === 'lost' && <Frown className="h-16 w-16 text-destructive" />}
                      <h2 className="text-3xl font-bold mt-4 font-headline">
                        {gameState === 'won' ? 'You Won!' : 'You Lost!'}
                      </h2>
                      {gameState === 'lost' && (
                         <p className="text-lg mt-2">The word was: <span className="font-bold text-primary">{wordToGuess}</span></p>
                      )}
                      <Button onClick={startNewGame} className="mt-4" size="lg">Play Again</Button>
                    </div>
                  )}
                  <HangmanDrawing numberOfIncorrectGuesses={incorrectLetters.length} />
                </div>
                
                <div className="flex flex-col items-center gap-4 w-full">
                    {isLoading ? (
                         <div className="flex flex-col items-center justify-center min-h-[80px]">
                            <Loader2 className="h-12 w-12 animate-spin text-primary" />
                         </div>
                    ) : (
                      <div className="w-full">
                        <WordDisplay
                            word={wordToGuess}
                            guessedLetters={guessedLetters}
                            reveal={gameState === 'lost'}
                        />
                      </div>
                    )}
                    
                    <div className="h-4 text-sm text-muted-foreground">
                        Incorrect Guesses: {incorrectLetters.length} / {MAX_INCORRECT_GUESSES}
                    </div>
                    
                    <div className="w-full max-w-md">
                      <Keyboard
                          disabled={gameState !== 'playing' || isLoading}
                          activeLetters={correctLetters}
                          inactiveLetters={incorrectLetters}
                          onSelectLetter={addGuessedLetter}
                      />
                    </div>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
