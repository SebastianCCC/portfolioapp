import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useContext } from '../../utils/useContext'
import { Projects } from '../Links'
import ThemeSwitch from '../Theme'
import { LogoIcon, MenuIcon } from './images'

const ProjectLinks = () => {
  const router = useRouter()
  return Projects.map(({ name, path, icon }) => {
    return (
      <ul className='w-full' key={name}>
        <Link href={path}>
          <div
            data-path={router.pathname === path || null}
            className='flex min-w-fit items-center justify-center p-[14px] text-tertiary/70 data-[path]:text-black/100 dark:text-sec_addition data-[path]:dark:text-white sm:px-3'
          >
            <div className='mr-2 scale-90 sm:scale-100'>{icon}</div>
            <p className='text-xs font-extrabold capitalize tracking-[1px] sm:text-sm'>{name}</p>
          </div>
        </Link>
      </ul>
    )
  })
}

const SideNavBar = () => {
  const { setIsOpen } = useContext()
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
    <div className='fixed w-full xl:hidden'>
      <div className='relative z-10 flex w-full cursor-pointer items-center justify-between border-b bg-white/90 p-4 backdrop-blur-[8px] dark:border-tertiary/25 dark:bg-additional/95'>
        <div className='flex items-center'>
          <div onClick={() => setIsOpen(true)} className='mr-4 sm:mr-2'>
            <MenuIcon />
          </div>
          <ThemeSwitch />
        </div>
        <div className='hidden items-center sm:flex'>
          <ProjectLinks />
        </div>
        <Link href='/'>
          <div>
            <LogoIcon />
          </div>
        </Link>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial='closed'
            animate='open'
            exit='closed'
            variants={variants}
            className='no-scrollbar m-5 mt-3 flex items-center overflow-auto rounded-full border border-tertiary/15 bg-white/50 backdrop-blur-[8px] dark:border-tertiary/25 dark:bg-additional/50 sm:hidden'
          >
            <ProjectLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SideNavBar
