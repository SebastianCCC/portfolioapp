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
            initial='closed'
            animate='open'
            exit='closed'
            variants={variants}
            className='fixed min-h-screen w-full bg-projectview p-4 backdrop-blur-[8px] dark:bg-additional xl:hidden'
          >
            <div className='w-full'>
              <div onClick={() => setIsOpen(false)} className='text-additional dark:text-secondary'>
                <ExitIcon />
              </div>
            </div>
            <div className='mx-auto my-12 flex flex-col md:max-w-[600px] lg:max-w-[800px]'>
              <div className='m-4 text-additional dark:text-secondary'>
                <LogoIcon />
              </div>
              <ul>
                {NavLinks.map(({ title, icon, link, handleEvent }) => {
                  return (
                    !handleEvent?.pcOnly && (
                      <div key={title} className='border-t px-4 dark:border-tertiary/25'>
                        <div onClick={() => setIsOpen(false)}>
                          <NavBarItems title={title} link={link} icon={icon} />
                        </div>
                      </div>
                    )
                  )
                })}
              </ul>
              <div className='border-t px-4 dark:border-tertiary/25'>
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
