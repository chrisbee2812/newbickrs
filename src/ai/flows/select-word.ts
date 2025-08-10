'use server';

/**
 * @fileOverview Selects a word for the Hangman game, adjusting difficulty based on the user's win/loss ratio.
 *
 * - selectWord - A function that selects a word based on the user's win/loss ratio.
 * - SelectWordInput - The input type for the selectWord function.
 * - SelectWordOutput - The return type for the selectWord function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SelectWordInputSchema = z.object({
  winLossRatio: z
    .number()
    .describe(
      'The win/loss ratio of the user. A higher ratio indicates more wins.'
    ),
});
export type SelectWordInput = z.infer<typeof SelectWordInputSchema>;

const SelectWordOutputSchema = z.object({
  word: z.string().describe('The selected word for the Hangman game.'),
});
export type SelectWordOutput = z.infer<typeof SelectWordOutputSchema>;

export async function selectWord(input: SelectWordInput, wordList: string[]): Promise<SelectWordOutput> {
  return selectWordFlow(input);
}

const prompt = ai.definePrompt({
  name: 'selectWordPrompt',
  input: {schema: SelectWordInputSchema},
  output: {schema: SelectWordOutputSchema},
  prompt: `You are a word selection AI for a Hangman game. Select a random English word that meets the following criteria:
1. Length: Between 4 and 14 letters.
2. Common word (not obscure or highly specialized).
3. Does not contain hyphens, apostrophes, or spaces.
4. Not in this list: {wordList.join(', ')}.

Respond with only the chosen word, nothing else. Do not include any explanations or formatting.

Selected Word:`,
});



const selectWordFlow = ai.defineFlow(
  {
    name: 'selectWordFlow',
    inputSchema: SelectWordInputSchema,
    outputSchema: SelectWordOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      word: output!.word,
    };
  }
);
