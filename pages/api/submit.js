// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { withSentry } from '@sentry/nextjs'
import nodemailer from 'nodemailer'

const handler = async (req, res) => {
  const { firstName, phoneNumber, email, message } = req.body
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASS,
    },
    secure: true,
  })

  const mailData = {
    from: email,
    to: process.env.EMAIL,
    subject: `${email} - ${firstName}`,
    text: `${firstName}:\r\n ${message}`,
    html: `
      <div>
        <p style="font-weight: 700; margin: 0;">Name: <span style="font-weight: 400;">${firstName}</span></p>
        <p style="font-weight: 700; margin: 0;">Sender: <span style="font-weight: 400;">${email}</span></p>
        <p style="font-weight: 700; margin: 0;">Phone: <span style="font-weight: 400;">${phoneNumber}</span></p>
        <br/>
        <p style="font-weight: 700;">Message: <span style="font-weight: 400;">${message}</span></p>
      </div>
    `,
  }

  transporter.sendMail(mailData, (err) => {
    if (!err) {
      res.status(200)
    }
  })
}

export default handler
