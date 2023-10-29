import Link from 'next/link'
import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { StateContext } from '../../hooks/StateContext'

const NavBarItems = ({
  link,
  title,
  icon,
  onHoverEnter,
  onHoverLeave,
  style,
  styleIcon,
  onClick,
}) => {
  const { isOpen, setIsOpen } = useContext(StateContext)

  const isFunction = () => {
    return Boolean(typeof socLink === 'function')
  }

  return (
    <li
      className={`${style} group dark:hover:text-white dark:text-sec_addition text-additional cursor-pointer ${
        !style && 'xl:py-0 py-[15px]'
      } tracking-[1px] text-md xl:text-base uppercase xl:capitalize mx-4`}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
      onClick={onClick}
    >
      <Link href={link}>
        <div className="xl:flex items-center">
          {icon && <div className={`${styleIcon} rounded p-1`}>{icon}</div>}
          <motion.h2
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className={`dark:group-hover:text-white text-center xl:ml-2 font-medium`}
          >
            {title}
          </motion.h2>
        </div>
      </Link>
    </li>
  )
}

export default NavBarItems
