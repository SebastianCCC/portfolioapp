import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASS,
  },
  secure: true,
})
