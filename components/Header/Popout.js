import { motion } from 'framer-motion'
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
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className="bg-secondary/90 min-h-screen p-4 backdrop-blur-[8px]"
      >
        <div className={`flex justify-between w-full items-center`}>
          <div onClick={() => setIsOpen(false)} className="text-additional">
            <ExitIcon />
          </div>
          <div className="text-additional">
            <LogoIcon />
          </div>
        </div>
        <div onClick={() => setIsOpen(false)} className="flex flex-col items-center">
          <ul>
            {NavLinks.map(({ title, link }, i) => (
              <NavBarItems key={i} title={title} link={link} />
            ))}
          </ul>
          <ThemeSwitch />
        </div>
      </motion.div>
    </>
  )
}

export default SideNavBar
