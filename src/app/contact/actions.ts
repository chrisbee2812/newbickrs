'use server';

import { z } from 'zod';
import { contactFormSchema } from './schema';

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, message: 'Invalid form data.' };
  }
  
  // Here you would typically send an email or save to a database.
  // For this example, we'll just log it to the server console.
  console.log('New contact form submission:', validatedFields.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true, message: "Thank you for your message! I'll get back to you soon." };
}
