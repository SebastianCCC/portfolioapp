import NavBarItems from './NavbarItems'
import { LogoIcon, HomeIcon, WorkIcon, UserIcon } from './images'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { RiSpotifyLine } from 'react-icons/ri'

const SideNavBar = () => {
  return (
    <div className="absolute left-0 min-h-screen bg-darkblue p-4 flex flex-col items-start justify-between">
      <div className="cursor-pointer">
        <LogoIcon />
      </div>
      <div className="my-2">
        <ul>
          <NavBarItems icon={<HomeIcon />} title="Home" link="/" />
          <NavBarItems icon={<WorkIcon />} title="Work" link="/work" />
          <NavBarItems icon={<UserIcon />} title="About Me" link="#" />
        </ul>
      </div>
      <div className="border-t border-pink">
        <ul>
          <NavBarItems icon={<FiGithub />} socLink="https://github.com/SebastianCCC" />
          <NavBarItems
            icon={<FiLinkedin />}
            socLink="https://www.linkedin.com/in/sebastian-christopher-489364238/"
          />
          <NavBarItems
            icon={<RiSpotifyLine />}
            socLink="https://open.spotify.com/artist/5kOQRo3IZFZe1TUhyqZZyN?si=q-9zOLxTRkqG9I4zHhDWCw"
          />
        </ul>
      </div>
    </div>
  )
}

export default SideNavBar
