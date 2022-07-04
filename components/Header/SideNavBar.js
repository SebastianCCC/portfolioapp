import { useTheme } from 'next-themes'
import Link from 'next/link'
import { NavLinks, SocialLinks } from '../Links'
import ThemeSwitch from '../Theme'
import { LogoIcon } from './images'
import NavBarItems from './NavbarItems'

const SideNavBar = () => {
  const { theme } = useTheme()

  return (
    <div className="hidden lg:block">
      <div
        className={`absolute left-0 dark:bg-primary bg-tertiary min-h-screen w-fit flex flex-col items-start justify-between`}
      >
        <Link href="/">
          <div className="w-full p-4 cursor-pointer">
            <LogoIcon FillRef={theme} />
          </div>
        </Link>
        <div className={`m-4 my-2`}>
          <ul>
            {NavLinks.map(({ icon, title, link }, i) => (
              <NavBarItems key={i} icon={icon} title={title} link={link} />
            ))}
          </ul>
        </div>
        <div className={`m-4 border-t dark:border-tertiary border-secondary`}>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  )
}

export default SideNavBar
