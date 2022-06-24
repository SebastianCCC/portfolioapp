import { useTheme } from 'next-themes'
import { useContext, useEffect, useState } from 'react'
import { StateContext } from '../../hooks/StateContext'
import { LogoIcon, MenuIcon } from './images'

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
        className={`absolute flex justify-between p-4 w-full items-center cursor-pointer ${
          navbar && 'dark:bg-purple bg-darkblue drop-shadow-md'
        } transition duration-700 ease-out lg:hidden`}
      >
        <div onClick={() => setIsOpen(true)} className="dark:text-white text-pink pr-2">
          <MenuIcon />
        </div>
        <LogoIcon FillRef={theme} />
      </div>
    </>
  )
}

export default SideNavBar
