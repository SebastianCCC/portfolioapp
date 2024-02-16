import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

type LinkItemProps = {
  link: string
  children: React.ReactNode
}

type NavBarItemsProps = {
  link: string
  title: string
  description?: string
  descriptionToggle?: boolean
  icon?: React.ReactNode
  onHoverEnter?: () => void
  onHoverLeave?: () => void
  style?: string
  styleIcon?: string
  onClick?: () => void
}

const LinkItem = ({ link, children }: LinkItemProps) => {
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
  description,
  descriptionToggle,
  icon,
  onHoverEnter,
  onHoverLeave,
  style,
  styleIcon,
  onClick,
}: NavBarItemsProps) => {
  const variants = {
    open: {
      height: 70,
      opacity: 1,
      paddingTop: 8,
      transition: {
        opacity: { duration: 0.5 },
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      paddingTop: 0,
      transition: {
        opacity: { duration: 0.1 },
      },
    },
  }

  return (
    <LinkItem link={link}>
      <li
        className={`${style} group dark:hover:text-white dark:text-sec_addition text-additional cursor-pointer ${
          !style && 'xl:py-0 py-[15px]'
        } text-sm`}
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}
        onClick={onClick}
      >
        <div className='flex items-center'>
          {icon && <div className={`${styleIcon} rounded p-1`}>{icon}</div>}
          <h2
            className={`dark:group-hover:text-white text-center ml-2 font-extrabold capitalize tracking-[1px]`}
          >
            {title}
          </h2>
        </div>
        <AnimatePresence>
          {descriptionToggle && description ? (
            <motion.p
              initial='closed'
              animate='open'
              exit='closed'
              variants={variants}
              transition={{ delay: 0.2, duration: 0.8 }}
              className='dark:text-sec_addition'
            >
              {description}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </li>
    </LinkItem>
  )
}

export default NavBarItems
