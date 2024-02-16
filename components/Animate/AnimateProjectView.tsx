import { motion } from 'framer-motion'
import { useContext, useState } from 'react'
import { StateContext } from '../../utils/StateContext'
import NavBarItems from '../Header/NavbarItems'

interface Project {
  name: string
  title: string
  description: string
  path: string
  icon: JSX.Element
}

type AnimateProjectViewProps = {
  projects: Project[]
  onHoverEnter?: () => void
  onHoverLeave?: () => void
}

function AnimateProjectView({ projects, onHoverEnter, onHoverLeave }: AnimateProjectViewProps) {
  const { setProjectView } = useContext(StateContext)
  const [descriptionView, handleDescriptionView] = useState<string | undefined>(projects[0].name)

  const descriptionToggle = (name?: string) => {
    handleDescriptionView(name)
  }

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
      initial='closed'
      animate='open'
      exit='closed'
      variants={variants}
      className='fixed top-0 left-0 w-[328px] h-full bg-white dark:bg-additional -z-10 dark:border-tertiary/25 border-secondary/70 border-r'
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
    >
      <div className='p-4 border-b dark:border-tertiary/25 border-secondary/70 mb-2'>
        <h3 className='dark:text-sec_addition text-additional text-sm tracking-[1px]'>
          Categories of Everything I&apos;ve Done
        </h3>
      </div>
      <div className='flex flex-col items-center h-full px-4'>
        {projects.map(({ name, description, path, icon }) => {
          return (
            <ul className='w-full h-fit my-2' key={name}>
              <NavBarItems
                style='bg-secondary/30 dark:bg-projectview_dark p-3 rounded-md'
                icon={icon}
                title={name}
                description={description}
                descriptionToggle={descriptionView === name}
                link={path}
                onHoverEnter={() => descriptionToggle(name)}
                onHoverLeave={() => descriptionToggle()}
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
