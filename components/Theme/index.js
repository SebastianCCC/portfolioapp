import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from './images'

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <>
      <motion.button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
        <motion.div animate={resolvedTheme === 'dark' ? { rotate: 360 } : { rotate: 0 }}>
          {resolvedTheme !== 'dark' ? <MoonIcon /> : <SunIcon />}
        </motion.div>
      </motion.button>
    </>
  )
}

export default ThemeSwitch
