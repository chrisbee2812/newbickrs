// src/ai/flows/explain-javascript-code.ts
'use server';

/**
 * @fileOverview Explains JavaScript code snippets.
 *
 * - explainJavascriptCode - A function that explains the given JavaScript code.
 * - ExplainJavascriptCodeInput - The input type for the explainJavascriptCode function.
 * - ExplainJavascriptCodeOutput - The return type for the explainJavascriptCode function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainJavascriptCodeInputSchema = z.object({
  code: z.string().describe('The JavaScript code snippet to explain.'),
});

export type ExplainJavascriptCodeInput = z.infer<typeof ExplainJavascriptCodeInputSchema>;

const ExplainJavascriptCodeOutputSchema = z.object({
  explanation: z.string().describe('A step-by-step explanation of the code.'),
});

export type ExplainJavascriptCodeOutput = z.infer<typeof ExplainJavascriptCodeOutputSchema>;

export async function explainJavascriptCode(input: ExplainJavascriptCodeInput): Promise<ExplainJavascriptCodeOutput> {
  return explainJavascriptCodeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainJavascriptCodePrompt',
  input: {schema: ExplainJavascriptCodeInputSchema},
  output: {schema: ExplainJavascriptCodeOutputSchema},
  prompt: `You are an expert JavaScript developer. Please provide a step-by-step explanation of the following code snippet:\n\n{{code}}\n\nExplanation:`,
});

const explainJavascriptCodeFlow = ai.defineFlow(
  {
    name: 'explainJavascriptCodeFlow',
    inputSchema: ExplainJavascriptCodeInputSchema,
    outputSchema: ExplainJavascriptCodeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
