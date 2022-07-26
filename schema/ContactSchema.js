import * as yup from 'yup'

export const schema = yup
  .object({
    firstName: yup
      .string()
      .required('Please enter your name')
      .min(2, 'Too few characters')
      .max(36, 'Too many characters'),
    email: yup
      .string()
      .required('Please enter your email address')
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email'),
    subject: yup
      .string()
      .required('Please enter a subject')
      .min(2, 'Too few characters')
      .max(36, 'Too many characters'),
    message: yup
      .string()
      .required('Please enter a message')
      .min(10, 'Could you be a bit more descriptive')
      .max(400, "That's a bit long"),
  })
  .required()
