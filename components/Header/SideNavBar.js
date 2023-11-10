import { useTheme } from 'next-themes'
import Link from 'next/link'
import ContactSwitch from '../Contact/ContactSwitch'
import { NavLinks, SocialLinks } from '../Links'
import ThemeSwitch from '../Theme'
import { LogoIconDark } from './images'
import NavBarItems from './NavbarItems'
import { useContext, useState } from 'react'
import AnimateProjectView from '../Animate/AnimateProjectView'
import { AnimatePresence } from 'framer-motion'
import { Projects } from '../Links'
import { StateContext } from '../../hooks/StateContext'
import { motion } from 'framer-motion'

const SideNavBar = () => {
  const { theme } = useTheme()
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
            <LogoIconDark />
          </div>
        </Link>
        <nav className={`pb-8`}>
          <ul>
            {NavLinks.map(({ icon, title, link, mobile, projectContent }, i) => {
              return (
                !mobile && (
                  <div
                    key={i}
                    className="first:border-t first:pt-8 last:border-y last:py-8 last:mt-8 dark:border-tertiary/25 border-secondary/70"
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
