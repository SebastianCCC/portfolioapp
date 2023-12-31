import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { StateContext } from '../../utils/StateContext'
import AnimateProjectView from '../Animate/AnimateProjectView'
import { NavLinks, Projects } from '../Links'
import ThemeSwitch from '../Theme'
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

  return (
    /*     <nav className="flex flex-col items-center"></nav> */
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
            {NavLinks.map(({ icon, title, link, mobile, projectContent }, i) => {
              return (
                !mobile && (
                  <div
                    key={i}
                    className="first:border-t first:pt-7 even:py-2 last:border-y even:last:py-7 last:mt-7 dark:border-tertiary/25 border-secondary/70"
                  >
                    <NavBarItems
                      icon={icon}
                      title={title}
                      link={link}
                      onHoverEnter={() => toggleProjectViewEnter(!!projectContent)}
                      onHoverLeave={() => toggleProjectViewLeave(!!projectContent)}
                      onClick={() => setProjectView(false)}
                    />
                  </div>
                )
              )
            })}
          </ul>
        </nav>
        <div className={`mx-4`}>
          <ThemeSwitch />
        </div>
      </div>
      <AnimatePresence>
        {projectView && (
          <AnimateProjectView
            onHoverEnter={() => toggleProjectViewEnter()}
            onHoverLeave={() => toggleProjectViewLeave()}
            projects={Projects}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default SideNavBar
