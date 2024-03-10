import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from './images'

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <motion.button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className='group flex w-full items-center rounded-md dark:text-white dark:hover:text-white sm:scale-90 sm:bg-secondary/25 sm:p-3 sm:dark:bg-tertiary/25 xl:scale-100 xl:dark:bg-projectview_dark xl:dark:text-sec_addition'
    >
      <motion.div animate={isDark ? { rotate: 360 } : { rotate: 0 }}>
        {!isDark ? <MoonIcon /> : <SunIcon />}
      </motion.div>
      <p className='ml-2 hidden text-sm font-extrabold capitalize tracking-[1px] dark:group-hover:text-white sm:block'>
        {isDark ? 'Light' : 'Dark'} Mode
      </p>
    </motion.button>
  )
}

export default ThemeSwitch
