import { z } from "zod";

/**
 * Shared by the client form (React Hook Form resolver) and the API route, so
 * the browser and the server can never disagree about what is valid.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "That name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(9, "Please enter a valid phone number.")
    .max(20, "That phone number is too long.")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number."),
  subject: z
    .string()
    .trim()
    .min(3, "Please enter a subject.")
    .max(120, "That subject is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more — at least 10 characters.")
    .max(2000, "Please keep your message under 2000 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
