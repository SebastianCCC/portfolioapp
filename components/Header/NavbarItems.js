import Link from 'next/link'
import { useState, useContext } from 'react'
import { StateContext } from '../../hooks/StateContext'
import { motion } from 'framer-motion'

const NavBarItems = ({ link, title, icon, socLink }) => {
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
            {isHover && (
              <motion.h2
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="pl-1 absolute left-[50px] w-screen"
              >
                {title}
              </motion.h2>
            )}
          </div>
        </Link>
      ) : (
        <div className="flex items-center">
          <a href={socLink} target="_blank">
            <div className="hover:bg-purple rounded p-1 text-2xl">{icon}</div>
          </a>
        </div>
      )}
    </li>
  )
}

export default NavBarItems
