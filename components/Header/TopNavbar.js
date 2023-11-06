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
  return Projects.map(({ name, title, path, icon }, i) => {
    return (
      <ul className="w-full" key={i}>
        <Link href={path}>
          <div
            className={`flex items-center justify-center min-w-fit first:pl-0 px-4 dark:text-sec_addition text-tertiary/70 ${
              router.pathname === path ? 'dark:text-white text-black/100' : ''
            }`}
          >
            <div className="mr-1 scale-50">{icon}</div>
            <p>{name}</p>
          </div>
        </Link>
      </ul>
    )
  })
}

const SideNavBar = () => {
  const { isOpen, setIsOpen } = useContext(StateContext)
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
      x: 0,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      opacity: 0,
      x: '-100vw',
      transition: {
        delay: 1,
        x: { stiffness: 1000 },
      },
    },
  }

  return (
    <div className="fixed xl:hidden w-full">
      <div className="flex justify-between p-4 w-full items-center cursor-pointer dark:bg-additional/90 bg-white/80 border-b border-tertiary/25 backdrop-blur-[8px]">
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
            className="sm:hidden no-scrollbar flex items-center overflow-auto -mx-4 px-5 py-1 dark:bg-additional/90 bg-white/80 border-b border-tertiary/25 backdrop-blur-[8px] rounded-md"
          >
            <ProjectLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SideNavBar
