import emailjs from 'emailjs-com';

// EmailJS configuration - these should be set as environment variables in production
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id';
const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID || 'your_user_id';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  website?: string; // Honeypot field
}

export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Check if honeypot field is filled (spam detection)
    if (formData.website && formData.website.trim() !== '') {
      return {
        success: false,
        message: 'Spam detected'
      };
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'omar@mrxlab.net', // Recipient email
      reply_to: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_USER_ID
    );

    if (result.status === 200) {
      return {
        success: true,
        message: 'Message sent successfully!'
      };
    } else {
      return {
        success: false,
        message: 'Failed to send message. Please try again.'
      };
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: 'An error occurred while sending your message. Please try again later.'
    };
  }
};

// Initialize EmailJS (optional, but recommended)
export const initEmailJS = () => {
  if (EMAILJS_USER_ID && EMAILJS_USER_ID !== 'your_user_id') {
    emailjs.init(EMAILJS_USER_ID);
  }
};