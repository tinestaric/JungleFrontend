import { z } from 'zod'

export const registrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company is required').max(100, 'Company name must be less than 100 characters'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to be contacted by Companial',
  }),
})

export const gameCompleteSchema = z.object({
  sessionId: z.string().min(1, 'Session ID is required'),
  timeElapsed: z.number().positive('Time elapsed must be positive'),
})

export type RegistrationFormData = z.infer<typeof registrationSchema>
export type GameCompleteData = z.infer<typeof gameCompleteSchema> 