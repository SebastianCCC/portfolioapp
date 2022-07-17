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
    <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.532726 3.78571C0.777414 1.93125 2.36442 0.5 4.28571 0.5H10.7143C12.6356 0.5 14.2226 1.93125 14.4673 3.78571H0.532726Z"
        fill="#171717"
        stroke="#171717"
      />
      <path
        d="M14.4673 13.3571C14.2226 15.2116 12.6356 16.6429 10.7143 16.6429H4.28571C2.36442 16.6429 0.777414 15.2116 0.532726 13.3571H14.4673Z"
        fill="#171717"
        stroke="#171717"
      />
      <path
        d="M0.532726 6.92856H10.7143C12.6356 6.92856 14.2226 8.35981 14.4673 10.2143H4.28571C2.36442 10.2143 0.777414 8.78302 0.532726 6.92856Z"
        fill="#171717"
        stroke="#171717"
      />
      <path
        d="M17.2253 6.42856C16.6157 8.6842 17.1165 10.1504 17.2253 10.7143H21.8571C20.8774 9.02254 21.4217 7.10525 21.8571 6.42856H17.2253Z"
        fill="#171717"
      />
      <path
        d="M21.1889 1.25411C19.9018 2.0681 18.7477 3.23977 18.2143 4.28486L26.7993 4.28486C27.1546 4.33459 30 2.19469 30 0.418035V0H25.7324C25.4124 0 23.1719 0 21.1889 1.25411Z"
        fill="#171717"
      />
      <path
        d="M21.1889 15.8887C19.9018 15.0748 18.7477 13.9031 18.2143 12.858L26.7993 12.858C27.1546 12.8083 30 14.9482 30 16.7248V17.1429H25.7324C25.4124 17.1429 23.1719 17.1429 21.1889 15.8887Z"
        fill="#171717"
      />
    </svg>
  )
}

export const LogoIconDark = ({ FillRef }) => {
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
        stroke={FillRef === 'light' ? '#88304E' : 'white'}
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
