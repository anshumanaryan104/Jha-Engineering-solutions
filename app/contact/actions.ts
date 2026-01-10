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
  // Try multiple possible variable names (in case of case sensitivity issues)
  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL || 
                    process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL ||
                    process.env.google_apps_script_url;

  // Enhanced logging for debugging (will appear in Amplify CloudWatch logs)
  if (!scriptUrl) {
    const allEnvKeys = Object.keys(process.env);
    const relevantKeys = allEnvKeys.filter(key => 
      key.toUpperCase().includes('GOOGLE') || 
      key.toUpperCase().includes('SCRIPT') ||
      key.toUpperCase().includes('URL')
    );
    console.error('=== FORM CONFIGURATION ERROR ===');
    console.error('GOOGLE_APPS_SCRIPT_URL is not set');
    console.error('Total env vars:', allEnvKeys.length);
    console.error('Relevant env vars found:', relevantKeys);
    console.error('All env vars (first 20):', allEnvKeys.slice(0, 20));
    revalidatePath('/contact');
    redirect('/contact?error=configuration');
  }

  // Log successful variable access (for verification)
  console.log('GOOGLE_APPS_SCRIPT_URL is set, length:', scriptUrl?.length || 0);

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
