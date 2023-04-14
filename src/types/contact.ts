import { z } from "zod";
export const contactFormInputValidator = z.object({
  name: z.string().min(1, "Please enter your name."),
  email: z
    .string()
    .email("Please enter a valid email.")
    .min(1, "Please enter your email address."),
  url: z.string().max(0),
  subject: z.string().min(1, "Please enter the subject of your message."),
  message: z.string().min(1, "Please enter your message."),
});
export type ContactFormData = z.infer<typeof contactFormInputValidator>;
