import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(3),
});
