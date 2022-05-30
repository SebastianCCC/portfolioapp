import NavBarItems from './NavbarItems'
import { LogoIcon, HomeIcon, WorkIcon, UserIcon } from './images'

const SideNavBar = () => {
  return (
    <div className="absolute left-0 min-h-screen p-4 m-2 flex flex-col items-start">
      <div className="cursor-pointer">
        <LogoIcon />
      </div>
      <div className="my-2">
        <ul className="flex flex-col justify-center min-h-screen">
          <NavBarItems icon={<HomeIcon />} title="Home" link="/" />
          <NavBarItems icon={<WorkIcon />} title="Work" link="/work" />
          <NavBarItems icon={<UserIcon />} title="About Me" link="#" />
        </ul>
      </div>
    </div>
  )
}

export default SideNavBar
