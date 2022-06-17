import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from './images'

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <motion.button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="dark:text-darkblue text-pink py-1 mb-1 dark:hover:text-white hover:text-purple rounded p-1 text-2xl flex items-center"
        animate={theme === 'dark' ? { rotate: 360 } : { rotate: 0 }}
      >
        {theme !== 'dark' ? <MoonIcon /> : <SunIcon />}
      </motion.button>
    </>
  )
}

export default ThemeSwitch
