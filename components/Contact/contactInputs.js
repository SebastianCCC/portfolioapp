export const maxMsgTxtLength = 400
export const data = [
  {
    type: 'text',
    placeholder: 'Simon Sinek',
    name: 'What’s your name?',
    registerid: 'firstName',
    to: 'left',
  },
  {
    type: 'text',
    placeholder: 'Simon@Sinek.com',
    name: 'What’s your email address?',
    registerid: 'email',
    to: 'right',
  },
  {
    type: 'text',
    placeholder: 'Subject',
    name: 'What’s the subject?',
    registerid: 'subject',
    to: 'left',
  },
  {
    type: 'textarea',
    placeholder: 'Hello Sebastian...',
    name: 'What’s your message?',
    registerid: 'message',
    to: 'right',
  },
]

export const animation = () => {
  const container = {
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1.2,
        delayChildren: 1,
        staggerChildren: 0.7,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.2,
        duration: 0.7,
      },
    },
  }

  const item = {
    hidden: { y: -50, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return { container, item }
}
