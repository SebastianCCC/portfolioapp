import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { StateContext } from '../../hooks/StateContext'
import { LogoIconDark, MenuIcon } from './images'

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
          navbar && 'dark:bg-primary bg-tertiary drop-shadow-md'
        } transition duration-700 ease-out lg:hidden`}
      >
        <div onClick={() => setIsOpen(true)} className="dark:text-white text-secondary pr-2">
          <MenuIcon />
        </div>
        <Link href="/">
          <div>
            <LogoIconDark FillRef={theme} />
          </div>
        </Link>
      </div>
    </>
  )
}

export default SideNavBar
