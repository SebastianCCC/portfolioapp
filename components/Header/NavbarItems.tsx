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
        delay: 0.5,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      paddingTop: 0,
      transition: {
        opacity: { duration: 0.1 },
        delay: 0.2,
      },
    },
  }

  return (
    <LinkItem link={link}>
      <li
        data-style={!!style}
        className={`${style} group cursor-pointer text-sm text-additional data-[style=false]:py-[15px]
           dark:text-sec_addition dark:hover:text-white data-[style=false]:xl:py-0`}
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}
        onClick={onClick}
      >
        <div className='flex items-center'>
          {icon && <div className={`${styleIcon} rounded p-1`}>{icon}</div>}
          <h2 className='ml-2 text-center font-extrabold capitalize tracking-[1px] dark:group-hover:text-white'>
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
              transition={{ duration: 0.8 }}
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
