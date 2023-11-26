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

export const LogoIconOutline = ({ width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 110} height={height || 63} fill="none">
      <path
        fill="currentColor"
        d="M0 15.684C0 7.022 7.022 0 15.684 0h23.632C47.978 0 55 7.022 55 15.684H0ZM0 47.05h55c0 8.663-7.022 15.684-15.684 15.684H15.684C7.022 62.734 0 55.713 0 47.051ZM0 23.525h39.316C47.978 23.525 55 30.547 55 39.21H15.684C7.022 39.209 0 32.187 0 23.525Z"
      />
      <path
        stroke="currentColor"
        d="M79.303 38.709H63.565l-.12-.523c-.576-2.471-1.689-7.25.1-14.16h15.74c-.706 1.397-1.374 3.495-1.586 5.904-.236 2.689.093 5.798 1.604 8.779ZM98.454 15.148c-.09.03-.131.034-.136.035l-.019-.002H67.628c2.047-3.537 5.966-7.414 10.331-10.169C85.103.504 93.193.5 94.352.5H109.5v1.03c0 1.497-.604 3.114-1.578 4.72-.971 1.6-2.287 3.151-3.653 4.506-1.366 1.355-2.77 2.501-3.907 3.294-.57.398-1.064.7-1.447.896a3.447 3.447 0 0 1-.461.202ZM98.454 47.586c-.09-.03-.131-.034-.136-.035l-.019.003H67.628c2.047 3.536 5.966 7.413 10.331 10.168 7.144 4.509 15.234 4.512 16.393 4.512H109.5v-1.03c0-1.497-.604-3.114-1.578-4.72-.971-1.6-2.287-3.151-3.653-4.506-1.366-1.354-2.77-2.5-3.907-3.294-.57-.397-1.064-.7-1.447-.896a3.447 3.447 0 0 0-.461-.202Z"
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
