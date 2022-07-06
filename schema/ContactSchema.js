import * as yup from 'yup'

export const schema = yup
  .object({
    firstName: yup
      .string()
      .required('Your first name is required')
      .min(2, 'Too few characters')
      .max(36, 'Too many characters'),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]+$/, 'Please enter a valid phone number')
      .min(7, 'Too few digits')
      .max(14, 'Too many digits'),
    email: yup
      .string()
      .required('Your email is required')
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email'),
    emailConfirm: yup
      .string()
      .oneOf([yup.ref('email')], 'Email must match')
      .required('Please confirm your email'),
    message: yup
      .string()
      .required('Please enter a message')
      .min(10, 'Could you be a bit more descriptive')
      .max(400, "That's a bit long"),
  })
  .required()
