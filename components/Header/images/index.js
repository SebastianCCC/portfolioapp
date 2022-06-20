import { motion } from 'framer-motion'

export const LogoIcon = ({ FillRef }) => {
  /*   const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      const delay = 1 * 1.5
      return {
        pathLength: 1.1,
        opacity: 1,
        transition: {
          pathLength: {
            delay,
            type: 'spring',
            duration: 4,
            bounce: 0,
            repeat: Infinity,
            repeatType: 'reverse',
          },
        },
      }
    },
  } */
  return (
    <motion.svg
      width="30"
      height="45"
      viewBox="0 0 30 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M22 8V1H1V38H8.5M22 8H8.5V14H28.5V8H22ZM8.5 38H22V30.5H8.5V24H28.5V44H8.5V38Z"
        stroke={FillRef === 'light' ? '#E5007F' : 'white'}
        strokeWidth="2"
      />
    </motion.svg>
  )
}

export const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export const ExitIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
