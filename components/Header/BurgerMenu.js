import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import { StateContext } from '../../utils/StateContext'
import { NavLinks } from '../Links'
import LoginButtun from './LoginButtun'
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
            className="fixed w-full dark:bg-additional bg-projectview min-h-screen p-4 backdrop-blur-[8px] xl:hidden"
          >
            <div className="w-full">
              <div onClick={() => setIsOpen(false)} className="dark:text-secondary text-additional">
                <ExitIcon />
              </div>
            </div>
            <div className="flex flex-col my-12 md:max-w-[600px] lg:max-w-[800px] mx-auto">
              <div className="dark:text-secondary text-additional m-4">
                <LogoIcon />
              </div>
              <ul>
                {NavLinks.map(({ title, icon, link, handleEvent }) => {
                  return (
                    !handleEvent?.pcOnly && (
                      <div key={title} className="px-4 border-t border-tertiary/25">
                        <div onClick={() => setIsOpen(false)}>
                          <NavBarItems title={title} link={link} icon={icon} />
                        </div>
                      </div>
                    )
                  )
                })}
              </ul>
              <div className="px-4 border-t border-tertiary/25">
                <div>
                  <LoginButtun onClick={() => setIsOpen(false)} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default BurgerMenu
