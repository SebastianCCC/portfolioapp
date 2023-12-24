import { motion } from 'framer-motion'
import NavBarItems from '../Header/NavbarItems'
import { useContext } from 'react'
import { StateContext } from '../../utils/StateContext'

function AnimateProjectView({ projects, onHoverEnter, onHoverLeave }) {
  const { setProjectView } = useContext(StateContext)
  const variants = {
    open: {
      left: '288px',
      transition: {
        left: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      left: 0,
      transition: {
        left: { stiffness: 1000 },
      },
    },
  }

  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={variants}
      className="fixed top-0 left-0 w-[288px] h-full bg-white dark:bg-additional -z-10 dark:border-tertiary/25 border-secondary/70 border-r"
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
    >
      <div className="flex flex-col justify-center items-center h-full bg-secondary/25 dark:bg-transparent">
        {projects.map(({ name, title, path, icon }, i) => {
          return (
            <ul className="w-full" key={i}>
              <NavBarItems
                style="bg-secondary/40 dark:bg-projectview_dark p-3 my-2 rounded-md"
                icon={icon}
                title={name}
                link={path}
                onClick={() => setProjectView(false)}
              />
            </ul>
          )
        })}
      </div>
    </motion.div>
  )
}

export default AnimateProjectView
