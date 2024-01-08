export const maxMsgTxtLength = 400
export const contact = [
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
    placeholder: 'e.g. React Native help',
    name: 'A subject to ease the conversation',
    registerid: 'subject',
    to: 'left',
  },
  {
    type: 'textarea',
    placeholder: 'Hello Sebastian...',
    name: 'A message to start the conversation',
    registerid: 'message',
    to: 'right',
  },
]

export const contactReply = [
  {
    type: 'text',
    placeholder: 'Simon Sinek',
    name: 'The name of the person you’re replying to',
    registerid: 'firstName',
    to: 'left',
  },
  {
    type: 'text',
    placeholder: 'Simon@Sinek.com',
    name: 'The email address of the person you’re replying to',
    registerid: 'email',
    to: 'right',
  },
  {
    type: 'text',
    placeholder: 'e.g. React Native help',
    name: 'A subject to ease the conversation',
    registerid: 'subject',
    to: 'left',
  },
  {
    type: 'textarea',
    placeholder: 'Hello Sebastian...',
    name: 'A message to the person you’re replying to',
    registerid: 'message',
    to: 'right',
  },
]

export const selectForm = [
  {
    title: 'Reply to email',
    slug: 'reply',
    link: '/contact/reply',
  },
]
