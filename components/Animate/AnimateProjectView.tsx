import { motion } from 'framer-motion'
import { useState } from 'react'
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
  onClick?: () => void
}

function AnimateProjectView({
  projects,
  onHoverEnter,
  onHoverLeave,
  onClick,
}: AnimateProjectViewProps) {
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
      className='fixed left-0 top-0 -z-10 h-full w-[328px] border-r border-secondary/70 bg-white dark:border-tertiary/25 dark:bg-additional'
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
    >
      <div className='mb-2 border-b border-secondary/70 p-4 dark:border-tertiary/25'>
        <h3 className='text-sm tracking-[1px] text-additional dark:text-sec_addition'>
          Categories of Everything I&apos;ve Done
        </h3>
      </div>
      <div className='flex h-full flex-col items-center px-4'>
        {projects.map(({ name, description, path, icon }) => {
          return (
            <ul className='my-2 h-fit w-full' key={name}>
              <NavBarItems
                style='bg-secondary/30 dark:bg-projectview_dark p-3 rounded-md'
                icon={icon}
                title={name}
                description={description}
                descriptionToggle={descriptionView === name}
                link={path}
                onHoverEnter={() => descriptionToggle(name)}
                onHoverLeave={() => descriptionToggle()}
                onClick={() => (onClick ? onClick() : null)}
              />
            </ul>
          )
        })}
      </div>
    </motion.div>
  )
}

export default AnimateProjectView
