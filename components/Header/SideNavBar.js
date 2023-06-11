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

const SideNavBar = () => {
  const { theme } = useTheme()
  const [delayHandler, setDelayHandler] = useState(null)
  const { projectView, setProjectView } = useContext(StateContext)

  const PROJECT_VIEW_DELAY = 500

  const toggleProjectViewEnter = (state = true) => {
    if (state) {
      setProjectView(true)
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
    }
  }

  return (
    /*     <nav className="flex flex-col items-center"></nav> */
    <div className="hidden xl:block">
      <div
        className={`top-0 bottom-0 left-0 dark:bg-sec_tertiary bg-secondary min-h-screen fixed w-[288px]`}
      >
        <Link href="/">
          <div className="w-full flex justify-center p-4 py-11 cursor-pointer">
            <LogoIconDark />
          </div>
        </Link>
        <nav className={`pb-8`}>
          <ul>
            {NavLinks.map(({ icon, title, link, pc, projectContent }, i) => {
              return (
                !pc && (
                  <div
                    key={i}
                    className="first:border-t first:pt-8 last:border-y last:py-8 last:mt-8 dark:border-tertiary border-white"
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
        <div className={`m-4`}>
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
    </div>
  )
}

export default SideNavBar
