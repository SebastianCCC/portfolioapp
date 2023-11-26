import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from './images'

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <motion.button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="group dark:hover:text-white dark:text-white xl:dark:text-sec_addition w-full sm:scale-90 xl:scale-100 sm:bg-secondary/25 sm:dark:bg-tertiary/25 xl:dark:bg-projectview_dark flex items-center sm:p-3 rounded-md"
    >
      <motion.div animate={isDark ? { rotate: 360 } : { rotate: 0 }}>
        {!isDark ? <MoonIcon /> : <SunIcon />}
      </motion.div>
      <p className="dark:group-hover:text-white hidden sm:block ml-2 text-sm capitalize tracking-[1px] font-extrabold">
        {isDark ? 'Light' : 'Dark'}
      </p>
    </motion.button>
  )
}

export default ThemeSwitch
