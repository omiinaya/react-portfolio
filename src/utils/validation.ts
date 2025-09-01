export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  website?: string;
}

export const validateContactForm = (data: ContactFormData): Record<string, string> => {
  const errors: Record<string, string> = {};

  // Honeypot validation
  if (data.website && data.website.trim() !== '') {
    errors.website = 'Spam detected';
    return errors; // Return early if spam is detected
  }

  // Name validation
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  } else if (data.name.trim().length > 50) {
    errors.name = 'Name must be less than 50 characters';
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Message validation
  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (data.message.trim().length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }

  return errors;
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};