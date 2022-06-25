import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useContext } from 'react'
import { StateContext } from '../../hooks/StateContext'
import { NavLinks, SocialLinks } from '../Links'
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
      <div
        onClick={() => setIsOpen(false)}
        className={`absolute min-w-full bg-transparent min-h-screen`}
      ></div>
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className={`absolute left-0 w-[70%] md:w-[30%] dark:bg-black bg-darkblue min-h-screen lg:w-[15%] flex flex-col items-start justify-between`}
      >
        <div className={`flex justify-between p-4 w-full items-center`}>
          <div onClick={() => setIsOpen(false)} className="dark:text-darkblue text-pink pr-2">
            <ExitIcon />
          </div>
          <LogoIcon FillRef={theme} />
        </div>
        <div onClick={() => setIsOpen(false)} className={`m-4 my-2`}>
          <ul>
            {NavLinks.map(({ icon, title, link }, i) => (
              <NavBarItems key={i} icon={icon} title={title} link={link} />
            ))}
          </ul>
        </div>
        <div className={`m-4`}>
          <ThemeSwitch />
          <ul>
            <div className={`border-t dark:border-darkblue border-pink`}>
              {SocialLinks.map(({ icon, soclink }, i) => (
                <NavBarItems key={i} icon={icon} socLink={soclink} />
              ))}
            </div>
          </ul>
        </div>
      </motion.div>
    </>
  )
}

export default SideNavBar
