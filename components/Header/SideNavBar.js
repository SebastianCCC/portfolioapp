import { useTheme } from 'next-themes'
import Link from 'next/link'
import ContactSwitch from '../Contact/ContactSwitch'
import { NavLinks, SocialLinks } from '../Links'
import ThemeSwitch from '../Theme'
import { LogoIconDark } from './images'
import NavBarItems from './NavbarItems'

const SideNavBar = () => {
  const { theme } = useTheme()

  return (
    /*     <nav className="flex flex-col items-center"></nav> */
    <div className="hidden xl:block">
      <div
        className={`top-0 bottom-0 left-0 dark:bg-additional bg-secondary min-h-screen fixed w-[288px]`}
      >
        <Link href="/">
          <div className="w-full flex justify-center p-4 py-11 cursor-pointer">
            <LogoIconDark />
          </div>
        </Link>
        <nav className={`py-8`}>
          <ul>
            {NavLinks.map(({ icon, title, link, pc }, i) => {
              return (
                !pc && (
                  <div
                    key={i}
                    className="first:border-t first:pt-8 last:border-y last:py-8 last:mt-8 dark:border-tertiary border-white"
                  >
                    <NavBarItems icon={icon} title={title} link={link} />
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
    </div>
  )
}

export default SideNavBar
