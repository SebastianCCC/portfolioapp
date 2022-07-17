import Link from 'next/link'
import { useContext } from 'react'
import { StateContext } from '../../hooks/StateContext'
import { LogoIconDark, MenuIcon } from './images'

const SideNavBar = () => {
  const { isOpen, setIsOpen } = useContext(StateContext)
  return (
    <>
      <div className="absolute flex justify-between p-4 w-full items-center cursor-pointer xl:hidden bg-additional ">
        <div onClick={() => setIsOpen(true)} className="dark:text-white text-secondary pr-2">
          <MenuIcon />
        </div>
        <Link href="/">
          <div>
            <LogoIconDark />
          </div>
        </Link>
      </div>
    </>
  )
}

export default SideNavBar
