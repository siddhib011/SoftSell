import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Please enter your name' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  company: z.string().min(1, { message: 'Please enter your company name' }),
  licenseType: z.string().min(1, { message: 'Please select a license type' }),
  message: z.string().min(1, { message: 'Please enter your message' })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Chat message validation schema
export const chatMessageSchema = z.object({
  message: z.string().min(1, { message: 'Please enter a message' })
});

export type ChatMessageData = z.infer<typeof chatMessageSchema>;
