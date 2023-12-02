import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import { StateContext } from '../../hooks/StateContext'
import { NavLinks } from '../Links'
import NavBarItems from './NavbarItems'
import { ExitIcon, LogoIcon } from './images'

const BurgerMenu = () => {
  const { isOpen, setIsOpen } = useContext(StateContext)

  const variants = {
    open: {
      x: 0,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
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
            className="fixed w-full dark:bg-additional bg-secondary min-h-screen p-4 backdrop-blur-[8px]"
          >
            <div className="w-full">
              <div onClick={() => setIsOpen(false)} className="dark:text-secondary text-additional">
                <ExitIcon />
              </div>
            </div>
            <div className="flex flex-col mx-8 my-16">
              <div className="dark:text-secondary text-additional m-4">
                <LogoIcon />
              </div>
              {NavLinks.map(({ title, icon, link, pc }, i) => {
                return (
                  !pc && (
                    <ul
                      key={i}
                      onClick={() => setIsOpen(false)}
                      className="border-t border-tertiary/25"
                    >
                      <NavBarItems title={title} link={link} icon={icon} />
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

export default BurgerMenu
