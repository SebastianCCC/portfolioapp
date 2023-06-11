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
        fill="currentColor"
        stroke="currentColor"
      />
      <path
        d="M14.4673 13.3571C14.2226 15.2116 12.6356 16.6429 10.7143 16.6429H4.28571C2.36442 16.6429 0.777414 15.2116 0.532726 13.3571H14.4673Z"
        fill="currentColor"
        stroke="currentColor"
      />
      <path
        d="M0.532726 6.92856H10.7143C12.6356 6.92856 14.2226 8.35981 14.4673 10.2143H4.28571C2.36442 10.2143 0.777414 8.78302 0.532726 6.92856Z"
        fill="currentColor"
        stroke="currentColor"
      />
      <path
        d="M17.2253 6.42856C16.6157 8.6842 17.1165 10.1504 17.2253 10.7143H21.8571C20.8774 9.02254 21.4217 7.10525 21.8571 6.42856H17.2253Z"
        fill="currentColor"
      />
      <path
        d="M21.1889 1.25411C19.9018 2.0681 18.7477 3.23977 18.2143 4.28486L26.7993 4.28486C27.1546 4.33459 30 2.19469 30 0.418035V0H25.7324C25.4124 0 23.1719 0 21.1889 1.25411Z"
        fill="currentColor"
      />
      <path
        d="M21.1889 15.8887C19.9018 15.0748 18.7477 13.9031 18.2143 12.858L26.7993 12.858C27.1546 12.8083 30 14.9482 30 16.7248V17.1429H25.7324C25.4124 17.1429 23.1719 17.1429 21.1889 15.8887Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const LogoIconDark = ({ FillRef, width, height }) => {
  return (
    <svg
      width={width || 118}
      height={height || 68}
      viewBox="0 0 118 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 16.8242C0 7.53246 7.53246 0 16.8242 0H42.1758C51.4675 0 59 7.53246 59 16.8242H0Z"
        fill="currentColor"
      />
      <path
        d="M0 50.4727H59C59 59.7644 51.4675 67.2969 42.1758 67.2969H16.8242C7.53246 67.2969 0 59.7644 0 50.4727Z"
        fill="currentColor"
      />
      <path
        d="M0 25.2363H42.1758C51.4675 25.2363 59 32.7688 59 42.0605H16.8242C7.53246 42.0605 0 34.5281 0 25.2363Z"
        fill="currentColor"
      />
      <path
        d="M68.1588 41.5605C68.1186 41.3802 68.0729 41.1839 68.0235 40.9718C67.4051 38.3166 66.2073 33.174 68.1377 25.7363H85.1105C84.3457 27.2301 83.6156 29.4995 83.386 32.1104C83.1315 35.005 83.4893 38.3544 85.1294 41.5605H68.1588Z"
        stroke="currentColor"
      />
      <path
        d="M105.469 16.3242L105.445 16.3209H105.411L72.4833 16.3209C74.6737 12.5059 78.9011 8.31799 83.6097 5.346C91.2816 0.503597 99.9693 0.5 101.214 0.5H117.5V1.64106C117.5 3.25677 116.849 4.99777 115.802 6.72337C114.758 8.44349 113.345 10.1095 111.877 11.5646C110.411 13.0187 108.903 14.2499 107.681 15.1021C107.07 15.5288 106.538 15.8547 106.125 16.0655C105.918 16.1712 105.751 16.2428 105.625 16.2845C105.514 16.3212 105.469 16.3231 105.469 16.3242Z"
        stroke="currentColor"
      />
      <path
        d="M105.469 50.9727L105.445 50.976H105.411L72.4833 50.976C74.6737 54.7909 78.9011 58.9789 83.6097 61.9509C91.2816 66.7933 99.9693 66.7969 101.214 66.7969H117.5V65.6558C117.5 64.0401 116.849 62.2991 115.802 60.5735C114.758 58.8534 113.345 57.1873 111.877 55.7323C110.411 54.2782 108.903 53.047 107.681 52.1948C107.07 51.7681 106.538 51.4422 106.125 51.2314C105.918 51.1257 105.751 51.0541 105.625 51.0124C105.514 50.9757 105.469 50.9738 105.469 50.9727Z"
        stroke="currentColor"
      />
    </svg>
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
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
