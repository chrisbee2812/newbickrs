'use server';

import { selectWord } from '@/ai/flows/select-word';

/**
 * Gets a new word for the Hangman game using an AI model.
 * The difficulty of the word is adjusted based on the player's win/loss ratio.
 * @param winLossRatio - The ratio of wins to losses for the current player.
 * @returns A promise that resolves to the new word in uppercase.
 */
export async function getNewWord(winLossRatio: number): Promise<string> {
  try {
    const result = await selectWord({ winLossRatio });
    if (!result.word || result.word.trim() === '' || !/^[a-zA-Z]+$/.test(result.word)) {
        throw new Error('AI returned an invalid word.');
    }
    // The word should be uppercase for easier comparison and display consistency.
    return result.word.toUpperCase();
  } catch (error) {
    console.error("Failed to get a new word from AI, providing a fallback.", error);
    // Provide a fallback word list in case the AI service is unavailable or fails.
    const fallbackWords = ["DEVELOPER", "NEXTJS", "REACT", "HANGMAN", "FIREBASE", "GENKIT", "TYPESCRIPT", "TAILWIND"];
    return fallbackWords[Math.floor(Math.random() * fallbackWords.length)];
  }
}
