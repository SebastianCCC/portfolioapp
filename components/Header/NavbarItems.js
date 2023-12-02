import { motion } from 'framer-motion'
import Link from 'next/link'

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
  return (
    <div className='mx-4'>
      <LinkItem link={link}>
        <li
          className={`${style} group dark:hover:text-white dark:text-sec_addition text-additional cursor-pointer ${
            !style && 'xl:py-0 py-[15px]'
          } text-sm capitalize tracking-[1px]`}
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          onClick={onClick}
        >
          <div className="xl:flex items-center">
            {icon && <div className={`${styleIcon} rounded p-1`}>{icon}</div>}
            <motion.h2
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className={`dark:group-hover:text-white text-center xl:ml-2 font-extrabold`}
            >
              {title}
            </motion.h2>
          </div>
        </li>
      </LinkItem>
    </div>
  )
}

export default NavBarItems
