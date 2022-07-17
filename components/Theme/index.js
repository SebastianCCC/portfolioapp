import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from './images'

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <motion.button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="dark:text-additional text-secondary text-2xl"
      >
        <motion.div animate={theme === 'dark' ? { rotate: 360 } : { rotate: 0 }}>
          {theme !== 'dark' ? <MoonIcon /> : <SunIcon />}
        </motion.div>
      </motion.button>
    </>
  )
}

export default ThemeSwitch
