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

export async function selectWord(input: SelectWordInput): Promise<SelectWordOutput> {
  return selectWordFlow(input);
}

const prompt = ai.definePrompt({
  name: 'selectWordPrompt',
  input: {schema: SelectWordInputSchema},
  output: {schema: SelectWordOutputSchema},
  prompt: `You are a word selection AI for a Hangman game. Select a word based on the user's win/loss ratio to provide a challenging experience.

  Win/Loss Ratio: {{{winLossRatio}}}

  Difficulty Adjustment:
  - If the win/loss ratio is less than 0.3, select a short, common word.
  - If the win/loss ratio is between 0.3 and 0.7, select a word of medium length and difficulty.
  - If the win/loss ratio is greater than 0.7, select a long, complex word.

  Respond with the selected word.

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
