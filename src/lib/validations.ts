import z from 'zod';

const contactSchema = z.object({
  name: z.string().min(3, { error: 'Name field cannot be empty' }),
  email: z.string().min(3, { error: 'Email field cannot be empty' }),
  phoneNumber: z.string().optional(),
  companyName: z.string().optional(),
  service: z.string().min(3, { error: 'Your interested services is required' }),
  projectDetails: z.string().min(3, { error: 'Project details is required' }),
});

export { contactSchema };
