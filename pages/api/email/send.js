// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { transporter } from '../../../components/Contact/transporter'
import { ContactValidation } from '../../../schema/validation/ContactValidation'

const handler = async (req, res) => {
  const value = await ContactValidation(req.body)

  const mailData = {
    from: value.email,
    to: value.email,
    subject: `Here is a summary of your message, ${value.firstName}!`,
    text: `${value.firstName}:\r\n ${value.message}`,
    html: `
      <div style="width: 500px; margin: 0 auto;">
          <img
            src="https://portfolioapp-moreseb.vercel.app/apple-touch-icon.png"
            width="50"
            height="50"
          />
        <div style="margin-left: 4px">
          <h1 style="font-weight: bold; font-size: 20px; color: #434040; margin: 0;	text-transform: capitalize;">Hello ${value.firstName}!</h1>
          <p style="font-weight: 400; font-size: 12px; color: #434040; margin: 0; color: black; text-transform: lowercase;">${value.email}</p>
          <p style="font-weight: 400; font-size: 15px; color: #434040; margin: 0; margin-top: 8px">I've received your pretty words, so an email should be on it's way once i get off work.</p>
          <div style="display: flex; margin-top: 24px; margin-bottom: 16px;">
            <h2 style="font-weight: 400; font-size: 15px; text-align: center;	text-transform: uppercase; color: #434040; margin: 0; padding-right: 8px; letter-spacing: 2px; min-width: 28%;">Summary</h2>
            <div style="height: 1px; width: 100%; background-color: #434040; opacity: 0.5; margin-top: 10px;"></div>
          </div>
          <div style="padding: 10px; background-color: #EDEDED4D; border-radius: 6px;">
            <p style="font-weight: 400; font-size: 12px; color: #434040; margin: 0; color: black;">Subject!</p>
            <p style="font-weight: bold; font-size: 14px; font-style: italic; color: #434040; margin: 0; color: black;">${value.subject}</p>
          </div>
          <div style="min-height: 60px; margin-top: 8px; margin-bottom: 16px; padding: 10px; background-color: #EDEDED4D; border-radius: 6px;">
          <p style="font-weight: 400; font-size: 12px; color: #434040; margin: 0; color: black;">Message!</p>
          <p style="font-weight: bold; font-size: 14px; font-style: italic; color: #434040; margin: 0; color: black;">${value.message}</p>
          </div>
          <p style="font-weight: 400; font-size: 15px; color: #434040; margin: 0;">Does it all look right? If not, send me another mail and i will get back to you.</p>
          <footer style="margin-top: 24px; margin-bottom: 16px; padding: 16px; border-radius: 6px;">
           <div style="width: 250px; margin: 0 auto; ">
             <div style="display: flex">
               <img
                src="https://portfolioapp-moreseb.vercel.app/apple-touch-icon.png"
                width="50"
                height="50"
              />
              <p style="font-weight: bold; font-size: 15px; color: #434040; margin: 0; margin-top: 14px; padding-left: 8px;">Sebastian Christopher</p>
             </div>
             <div style="display: flex">
             <a href="https://github.com/SebastianCCC" style="color: #434040; text-decoration: none; font-size: 15px;">GITHUB</a>
             <div style="height: 20px; width: 1px; background-color: #434040; opacity: 0.5; margin-left: 10px; margin-right: 10px;"></div>
             <a href="https://www.linkedin.com/in/sebastian-christopher-489364238/" style="color: #434040; text-decoration: none; font-size: 15px;">LINKEDIN</a>
             <div style="height: 20px; width: 1px; background-color: #434040; opacity: 0.5; margin-left: 10px; margin-right: 10px;"></div>
             <a href="https://open.spotify.com/artist/5kOQRo3IZFZe1TUhyqZZyN?si=ggQqRj_UR2qzC-GlQF34BA" style="color: #434040; text-decoration: none; font-size: 15px;">SPOTIFY</a>
             </div>
           </div>
          </footer>
        </div>
      </div>
    `,
  }

  if (value.errors) {
    return res.status(422).json({ errors: value.errors, input: value.path, parms: value.params })
  }

  transporter.sendMail(mailData, (err) => {
    if (!err) {
      return res.status(200).json({ userEmail: mailData.to })
    } else {
      return res.status(500).end()
    }
  })
}

export default handler
