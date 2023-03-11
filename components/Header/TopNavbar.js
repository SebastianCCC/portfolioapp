import Link from 'next/link'
import { useContext } from 'react'
import { StateContext } from '../../hooks/StateContext'
import ThemeSwitch from '../Theme'
import { LogoIcon, MenuIcon } from './images'

const SideNavBar = () => {
  const { isOpen, setIsOpen } = useContext(StateContext)
  return (
    <>
      <div className="fixed flex justify-between p-4 w-full items-center cursor-pointer xl:hidden dark:bg-additional/90 bg-white/80 border-b border-tertiary/25 backdrop-blur-[8px]">
        <div className="flex items-center">
          <div onClick={() => setIsOpen(true)} className="mr-4">
            <MenuIcon />
          </div>
          <ThemeSwitch />
        </div>
        <Link href="/">
          <div>
            <LogoIcon />
          </div>
        </Link>
      </div>
    </>
  )
}

export default SideNavBar
