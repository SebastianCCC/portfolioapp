import { useTheme } from 'next-themes'
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
        <div className="m-4 cursor-pointer">
          <LogoIcon FillRef={theme} />
        </div>
        <div className={`m-4 my-2`}>
          <ul>
            {NavLinks.map(({ icon, title, link }, i) => (
              <NavBarItems key={i} icon={icon} title={title} link={link} />
            ))}
          </ul>
        </div>
        <div className={`m-4`}>
          <ThemeSwitch />
          <ul>
            <div className={`border-t dark:border-tertiary border-secondary`}>
              {SocialLinks.map(({ icon, soclink }, i) => (
                <NavBarItems key={i} icon={icon} socLink={soclink} />
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideNavBar
