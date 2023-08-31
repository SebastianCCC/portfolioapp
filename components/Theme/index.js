import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from './images'

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <motion.button 
     onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
     className='w-full sm:scale-90 xl:scale-100 sm:bg-projectview/80 sm:dark:bg-tertiary/25 xl:dark:bg-additional flex items-center justify-between sm:p-2 rounded-md sm:dark:border-white/25 sm:border'>
      <p className='hidden sm:block mr-2'>{isDark ? 'Dark' : 'Light'}</p>
        <motion.div animate={isDark ? { rotate: 360 } : { rotate: 0 }}>
          {!isDark ? <MoonIcon /> : <SunIcon />}
        </motion.div>
    </motion.button>
  )
}

export default ThemeSwitch
