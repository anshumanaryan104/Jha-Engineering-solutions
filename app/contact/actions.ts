'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  // Get the Google Apps Script web app URL from environment variable
  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

  if (!scriptUrl) {
    revalidatePath('/contact');
    redirect('/contact?error=configuration');
  }

  try {
    // Submit to Google Apps Script web app
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || '',
        subject,
        message,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`);
    }

    revalidatePath('/contact');
    redirect('/contact?success=true');
  } catch (error) {
    // Check if this is a Next.js redirect error - if so, re-throw it
    if (error && typeof error === 'object' && 'digest' in error && typeof error.digest === 'string' && error.digest.includes('NEXT_REDIRECT')) {
      throw error; // Re-throw redirect errors
    }

    console.error('Form submission error:', error);
    revalidatePath('/contact');
    redirect('/contact?error=submission');
  }
}
