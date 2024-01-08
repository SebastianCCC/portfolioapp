import { object, string } from 'yup'

export const schema = object({
  email: string()
    .required('Please enter your email address')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email'),
  password: string()
    .required('Please enter a password')
    .min(14, 'Too few characters')
    .max(52, 'Too many characters'),
}).required()
