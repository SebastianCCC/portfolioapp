import { motion } from 'framer-motion'

export const BackHeroIcon = ({ fillRef }) => {
  const draw = {
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
  }
  return (
    <motion.svg
      initial="hidden"
      animate="visible"
      width="270"
      height="300"
      viewBox="0 0 30 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={draw}
        d="M22 8V1H1V38H8.5M22 8H8.5V14H28.5V8H22ZM8.5 38H22V30.5H8.5V24H28.5V44H8.5V38Z"
        stroke={fillRef === 'light' ? '#253269' : 'url(#paint0_linear_7_22)'}
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_7_22"
          x1="14.75"
          y1="1"
          x2="14.75"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8F1560" />
          <stop offset="1" stopColor="#253269" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
