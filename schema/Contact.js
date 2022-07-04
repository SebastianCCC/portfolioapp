import * as yup from 'yup'

export const schema = yup
  .object({
    firstName: yup.string().required('Your first name is required').min(2, 'too few characters'),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]+$/, 'This field must only contain numbers')
      .min(7, 'too few digits')
      .max(14, 'too many digits'),
    email: yup
      .string()
      .email()
      .required('Your email is required')
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'email must be a valid email'),
    emailConfirm: yup
      .string()
      .oneOf([yup.ref('email')], 'Email must match')
      .required('Please confirm your email'),
    message: yup
      .string()
      .required('I need some info')
      .min(10, 'could you be a bit more descriptive')
      .max(400, "that's a bit long"),
  })
  .required()
