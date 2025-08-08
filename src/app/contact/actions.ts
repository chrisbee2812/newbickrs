'use server';

import { z } from 'zod';
import { contactFormSchema } from './schema';

// export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
//   const validatedFields = contactFormSchema.safeParse(data);

//   if (!validatedFields.success) {
//     return { success: false, message: 'Invalid form data.' };
//   }
  
//   // // Here you would typically send an email or save to a database.
//   // // For this example, we'll just log it to the server console.
//   console.log('New contact form submission:', validatedFields.data);

//   // // Simulate network delay
//   await new Promise(resolve => setTimeout(resolve, 1000));

  
  
//   return { success: true, message: "Thank you for your message! I'll get back to you soon." };
// }


export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: "158dbce8-911f-44a4-a5a4-a3b839a32264",
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        message: validatedFields.data.message,
        subject: 'New Contact Form Submission',
        from_name: 'Bickrs',
        botcheck: false
      })
    });

    const result = await response.json();

    if (result.success) {
      return { 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      };
    } else {
      console.error('Web3Forms error:', result.message);
      return { 
        success: false, 
        message: result.message || 'Failed to send message. Please try again later.' 
      };
    }
  } catch (error) {
    console.error('Submission error:', error);
    return { 
      success: false, 
      message: 'An error occurred while sending your message. Please try again later.' 
    };
  }
}