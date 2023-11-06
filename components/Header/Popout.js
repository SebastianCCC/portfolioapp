import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useContext } from 'react'
import { StateContext } from '../../hooks/StateContext'
import { NavLinks } from '../Links'
import ThemeSwitch from '../Theme'
import { ExitIcon, LogoIcon } from './images'
import NavBarItems from './NavbarItems'

const SideNavBar = () => {
  const { isOpen, setIsOpen } = useContext(StateContext)
  const { theme } = useTheme()

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
        x: { stiffness: 1000 },
      },
    },
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className="fixed w-full dark:bg-additional/90 bg-secondary/90 min-h-screen p-4 backdrop-blur-[8px]"
          >
            <div className={`flex justify-between w-full items-center`}>
              <div onClick={() => setIsOpen(false)} className="dark:text-secondary text-additional">
                <ExitIcon />
              </div>
              <div className="dark:text-secondary text-additional">
                <LogoIcon />
              </div>
            </div>
            <div className="flex flex-col items-center">
              {NavLinks.map(({ title, link, pc }, i) => {
                return (
                  !pc && (
                    <ul key={i} onClick={() => setIsOpen(false)}>
                      <NavBarItems title={title} link={link} />
                    </ul>
                  )
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SideNavBar
