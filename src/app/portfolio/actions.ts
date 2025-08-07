'use server';

import { generateProjectDescription } from '@/ai/flows/generate-project-description';
import { z } from 'zod';

const formSchema = z.object({
  projectName: z.string().min(1, 'Project name is required.'),
  techStack: z.string().min(1, 'Tech stack is required.'),
});

type FormState = {
  message: string;
  errors?: {
    projectName?: string[];
    techStack?: string[];
  };
};

export async function generateDescriptionAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    projectName: formData.get('projectName'),
    techStack: formData.get('techStack'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { description } = await generateProjectDescription(validatedFields.data);
    return { message: description };
  } catch (e) {
    console.error(e);
    return { message: 'Failed to generate description. Please try again.' };
  }
}
