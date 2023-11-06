import Link from 'next/link'
import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { StateContext } from '../../hooks/StateContext'

const LinkItem = ({ link, children }) => {
  switch (link) {
    case '':
      return <div>{children}</div>

    default:
      return <Link href={link}>{children}</Link>
  }
}

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
      <LinkItem link={link}>
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
      </LinkItem>
    </li>
  )
}

export default NavBarItems
