import NavBarItems from './NavbarItems'
import { LogoIcon, HomeIcon, WorkIcon, UserIcon, MenuIcon } from './images'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { RiSpotifyLine } from 'react-icons/ri'
import { CgDarkMode } from 'react-icons/cg'
import { useTheme } from 'next-themes'
import { useState, useEffect, useContext } from 'react'
import { StateContext } from '../../hooks/StateContext'
import { motion } from 'framer-motion'

const SideNavBar = () => {
  const { theme, setTheme } = useTheme()
  const { isOpen, setIsOpen } = useContext(StateContext)
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 18) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener('scroll', changeBackground)
  })

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`absolute min-w-full ${isOpen && 'bg-transparent min-h-screen'} lg:hidden`}
      ></div>
      <div
        className={`absolute left-0 ${
          isOpen && 'w-[70%] md:w-[30%] bg-darkblue min-h-screen'
        } lg:bg-darkblue lg:min-h-screen w-full lg:w-fit flex flex-col items-start justify-between`}
      >
        <div
          className={`flex justify-between p-4 w-full items-center cursor-pointer ${
            navbar && 'bg-darkblue'
          } transition duration-700 ease-out`}
        >
          <div onClick={() => setIsOpen(!isOpen)} className="text-pink pr-2 lg:hidden">
            <MenuIcon />
          </div>
          <LogoIcon />
        </div>
        <div
          onClick={() => setIsOpen(false)}
          className={`m-4 my-2 ${!isOpen && 'hidden'} lg:block`}
        >
          <ul>
            <NavBarItems icon={<HomeIcon />} title="Home" link="/" />
            <NavBarItems icon={<WorkIcon />} title="Work" link="/work" />
            <NavBarItems icon={<UserIcon />} title="About Me" link="#about" />
          </ul>
        </div>
        <div className={`m-4 ${!isOpen && 'hidden'} lg:block`}>
          <ul>
            <NavBarItems icon={<CgDarkMode />} socLink={toggleTheme} />
            <div className={`border-t border-pink`}>
              <NavBarItems icon={<FiGithub />} socLink="https://github.com/SebastianCCC" />
              <NavBarItems
                icon={<FiLinkedin />}
                socLink="https://www.linkedin.com/in/sebastian-christopher-489364238/"
              />
              <NavBarItems
                icon={<RiSpotifyLine />}
                socLink="https://open.spotify.com/artist/5kOQRo3IZFZe1TUhyqZZyN?si=q-9zOLxTRkqG9I4zHhDWCw"
              />
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SideNavBar
