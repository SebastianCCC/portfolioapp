import Link from 'next/link'
import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { StateContext } from '../../hooks/StateContext'

const NavBarItems = ({ link, title, icon }) => {
  const { isOpen, setIsOpen } = useContext(StateContext)

  const isFunction = () => {
    return Boolean(typeof socLink === 'function')
  }

  return (
    <li
      className={`group dark:hover:text-white dark:text-sec_addition text-additional cursor-pointer py-[15px] xl:py-0 tracking-[2px] text-md xl:text-base uppercase xl:capitalize px-4`}
    >
      <Link href={link}>
        <div className="xl:flex items-center">
          {icon && <div className="rounded p-1">{icon}</div>}
          <motion.h2
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className={`dark:group-hover:text-white text-center xl:ml-2`}
          >
            {title}
          </motion.h2>
        </div>
      </Link>
    </li>
  )
}

export default NavBarItems
