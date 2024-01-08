import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { StateContext } from '../../utils/StateContext'
import AnimateProjectView from '../Animate/AnimateProjectView'
import { NavLinks, Projects } from '../Links'
import ThemeSwitch from '../Theme'
import LoginButtun from './LoginButtun'
import NavBarItems from './NavbarItems'
import { LogoIconOutline } from './images'

const SideNavBar = () => {
  const [delayHandler, setDelayHandler] = useState(null)
  const [delayHandlerEnter, setDelayHandlerEnter] = useState(null)
  const { projectView, setProjectView } = useContext(StateContext)

  const PROJECT_VIEW_DELAY = 500

  const toggleProjectViewEnter = (state = true) => {
    if (state) {
      setDelayHandlerEnter(
        setTimeout(() => {
          setProjectView(true)
        }, PROJECT_VIEW_DELAY)
      )
      clearTimeout(delayHandler)
    }
  }

  const toggleProjectViewLeave = (state = true) => {
    if (state) {
      setDelayHandler(
        setTimeout(() => {
          setProjectView(false)
        }, PROJECT_VIEW_DELAY)
      )
      clearTimeout(delayHandlerEnter)
    }
  }

  const events = (eventName) => {
    if (eventName === 'toggleProjectView') {
      return {
        onHoverEnter: () => toggleProjectViewEnter(eventName),
        onHoverLeave: () => toggleProjectViewLeave(eventName),
        onClick: () => setProjectView(false),
      }
    }

    return {}
  }

  return (
    <motion.div
      initial={{ x: -288, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden xl:block"
    >
      <div
        className={`top-0 bottom-0 left-0 dark:bg-[#151515] bg-projectview min-h-screen fixed w-[288px] dark:border-tertiary/25 border-secondary/70 border-r`}
      >
        <Link href="/">
          <div className="w-full flex justify-center p-4 py-11 cursor-pointer">
            <LogoIconOutline />
          </div>
        </Link>
        <nav className={`pb-5`}>
          <ul>
            {NavLinks.map(({ icon, title, link, handleEvent }) => {
              return (
                !handleEvent?.mobileOnly && (
                  <div
                    key={title}
                    className="first:border-t first:pt-7 even:pt-1 last:border-y last:py-7 last:mt-7 dark:border-tertiary/25 border-secondary/70 px-4"
                  >
                    <NavBarItems
                      icon={icon}
                      title={title}
                      link={link}
                      onHoverEnter={events(handleEvent?.name).onHoverEnter}
                      onHoverLeave={events(handleEvent?.name).onHoverLeave}
                      onClick={events(handleEvent?.name).onClick}
                    />
                  </div>
                )
              )
            })}
          </ul>
        </nav>
        <div className={`mx-4`}>
          <LoginButtun />
          <ThemeSwitch />
        </div>
      </div>
      <AnimatePresence>
        {projectView && (
          <AnimateProjectView
            onHoverEnter={events('toggleProjectView').onHoverEnter}
            onHoverLeave={events('toggleProjectView').onHoverLeave}
            projects={Projects}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default SideNavBar
