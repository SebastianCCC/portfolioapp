import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from './images'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <motion.button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-pink py-1 mb-1 hover:text-purple rounded p-1 text-2xl flex items-center"
          animate={theme === 'dark' ? { rotate: 360 } : { rotate: 0 }}
        >
          {theme !== 'dark' ? <MoonIcon /> : <SunIcon />}
        </motion.button>
      )}
    </>
  )
}

export default ThemeSwitch
