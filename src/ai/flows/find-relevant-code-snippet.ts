// src/ai/flows/find-relevant-code-snippet.ts
'use server';
/**
 * @fileOverview An AI agent for finding relevant code snippets based on user queries.
 *
 * - findRelevantCodeSnippet - A function that finds relevant code snippets.
 * - FindRelevantCodeSnippetInput - The input type for the findRelevantCodeSnippet function.
 * - FindRelevantCodeSnippetOutput - The return type for the findRelevantCodeSnippet function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FindRelevantCodeSnippetInputSchema = z.object({
  query: z.string().describe('The natural language query for finding code snippets.'),
});
export type FindRelevantCodeSnippetInput = z.infer<typeof FindRelevantCodeSnippetInputSchema>;

const FindRelevantCodeSnippetOutputSchema = z.object({
  codeSnippet: z.string().describe('The relevant code snippet found for the query.'),
  explanation: z.string().describe('An explanation of the code snippet and its usage.'),
});
export type FindRelevantCodeSnippetOutput = z.infer<typeof FindRelevantCodeSnippetOutputSchema>;

export async function findRelevantCodeSnippet(input: FindRelevantCodeSnippetInput): Promise<FindRelevantCodeSnippetOutput> {
  return findRelevantCodeSnippetFlow(input);
}

const prompt = ai.definePrompt({
  name: 'findRelevantCodeSnippetPrompt',
  input: {schema: FindRelevantCodeSnippetInputSchema},
  output: {schema: FindRelevantCodeSnippetOutputSchema},
  prompt: `You are an AI code assistant. Your task is to find relevant HTML, CSS, Tailwind CSS, or JavaScript code snippets based on the user's query.

  Query: {{{query}}}

  Provide a code snippet and an explanation of its usage.
`,
});

const findRelevantCodeSnippetFlow = ai.defineFlow(
  {
    name: 'findRelevantCodeSnippetFlow',
    inputSchema: FindRelevantCodeSnippetInputSchema,
    outputSchema: FindRelevantCodeSnippetOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
