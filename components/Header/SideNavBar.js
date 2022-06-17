import { useTheme } from 'next-themes'
import { useContext, useEffect, useState } from 'react'
import { StateContext } from '../../hooks/StateContext'
import { NavLinks, SocialLinks } from '../Links'
import ThemeSwitch from '../Theme'
import { LogoIcon, MenuIcon } from './images'
import NavBarItems from './NavbarItems'

const SideNavBar = () => {
  const { isOpen, setIsOpen } = useContext(StateContext)
  const [navbar, setNavbar] = useState(false)
  const { theme } = useTheme()

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

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`absolute min-w-full ${isOpen && 'bg-transparent min-h-screen'} lg:hidden`}
      ></div>
      <div
        className={`absolute left-0 ${
          isOpen && 'w-[70%] md:w-[30%] dark:bg-pink bg-darkblue min-h-screen'
        } dark:lg:bg-pink bg-darkblue lg:min-h-screen w-full lg:w-fit flex flex-col items-start justify-between`}
      >
        <div
          className={`flex justify-between p-4 w-full items-center cursor-pointer ${
            navbar && 'dark:bg-pink bg-darkblue'
          } transition duration-700 ease-out`}
        >
          <div onClick={() => setIsOpen(!isOpen)} className="text-white pr-2 lg:hidden">
            <MenuIcon />
          </div>
          <LogoIcon FillRef={theme} />
        </div>
        <div
          onClick={() => setIsOpen(false)}
          className={`m-4 my-2 ${!isOpen && 'hidden'} lg:block`}
        >
          <ul>
            {NavLinks.map(({ icon, title, link }, i) => (
              <NavBarItems key={i} icon={icon} title={title} link={link} />
            ))}
          </ul>
        </div>
        <div className={`m-4 ${!isOpen && 'hidden'} lg:block`}>
          <ThemeSwitch />
          <ul>
            <div className={`border-t dark:border-darkblue border-pink`}>
              {SocialLinks.map(({ icon, soclink }, i) => (
                <NavBarItems key={i} icon={icon} socLink={soclink} />
              ))}
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SideNavBar
