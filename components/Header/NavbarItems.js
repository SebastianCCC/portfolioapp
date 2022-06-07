import Link from 'next/link'
import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { StateContext } from '../../hooks/StateContext'

const NavBarItems = ({ link, title, icon, socLink }) => {
  const { isOpen, setIsOpen } = useContext(StateContext)
  const [isHover, setIsHover] = useState(false)
  return (
    <li
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="text-pink cursor-pointer font-bold py-1"
    >
      {!socLink ? (
        <Link href={link}>
          <div className="flex items-center relative">
            <div className="hover:bg-purple rounded p-1">{icon}</div>
            {(isHover || isOpen) && (
              <motion.h2
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className={`pl-1 ${!isOpen && 'absolute w-screen'} left-[50px]`}
              >
                {title}
              </motion.h2>
            )}
          </div>
        </Link>
      ) : (
        <div className="flex items-center">
          <a href={socLink} target="_blank" rel="noopener noreferrer">
            <div className="hover:bg-purple rounded p-1 text-2xl">{icon}</div>
          </a>
        </div>
      )}
    </li>
  )
}

export default NavBarItems
