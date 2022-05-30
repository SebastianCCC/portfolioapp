import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const NavBarItems = ({ link, title, icon }) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <li
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="text-pink cursor-pointer font-bold py-1"
    >
      <Link href={link}>
        <div className="flex items-center">
          <div className="hover:bg-purple rounded p-1">{icon}</div>
          {isHover && (
            <motion.h2
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="pl-1"
            >
              {title}
            </motion.h2>
          )}
        </div>
      </Link>
    </li>
  )
}

export default NavBarItems
