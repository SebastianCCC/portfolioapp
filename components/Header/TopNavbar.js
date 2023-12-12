import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { StateContext } from '../../hooks/StateContext'
import ThemeSwitch from '../Theme'
import { LogoIcon, MenuIcon } from './images'
import { Projects } from '../Links'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'

const ProjectLinks = () => {
  const router = useRouter()
  return Projects.map(({ name, path, icon }, i) => {
    return (
      <ul className="w-full" key={i}>
        <Link href={path}>
          <div
            className={`flex items-center justify-center min-w-fit p-4 dark:text-sec_addition text-tertiary/70 ${
              router.pathname === path ? 'dark:text-white text-black/100' : ''
            }`}
          >
            <div className="mr-2">{icon}</div>
            <p className="text-sm capitalize tracking-[1px] font-extrabold">{name}</p>
          </div>
        </Link>
      </ul>
    )
  })
}

const SideNavBar = () => {
  const { setIsOpen } = useContext(StateContext)
  const [scrollPos, setScrollPos] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const scrollThreshold = 60

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const diff = Math.abs(currentScrollPos - scrollPos)

      if (diff > scrollThreshold) {
        setIsVisible(scrollPos > currentScrollPos)
        setScrollPos(currentScrollPos)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPos])

  const variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
    closed: {
      opacity: 0,
      y: '-100vw',
      transition: {
        duration: 1.5,
        delay: 1,
      },
    },
  }

  return (
    <div className="fixed xl:hidden w-full">
      <div className="flex relative z-10 justify-between p-4 w-full items-center cursor-pointer dark:bg-additional/95 bg-white/90 border-b border-tertiary/25 backdrop-blur-[8px]">
        <div className="flex items-center">
          <div onClick={() => setIsOpen(true)} className="mr-4">
            <MenuIcon />
          </div>
          <ThemeSwitch />
        </div>
        <div className="hidden sm:flex items-center">
          <ProjectLinks />
        </div>
        <Link href="/">
          <div>
            <LogoIcon />
          </div>
        </Link>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className="sm:hidden no-scrollbar flex items-center overflow-auto dark:bg-additional/90 bg-white/80 border-b border-tertiary/25 backdrop-blur-[8px]"
          >
            <ProjectLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SideNavBar
