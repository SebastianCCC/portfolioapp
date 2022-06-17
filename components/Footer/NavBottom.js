import Link from 'next/link'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { RiSpotifyLine } from 'react-icons/ri'
import NavBarItems from '../Header/NavbarItems'
import { FooterIcon } from './images'

const NavBottom = () => {
  return (
    <div className={`bg-purple p-2 mt-20 flex justify-evenly items-center`}>
      <div className="flex items-center">
        <Link href="#">
          <div className="cursor-pointer">
            <FooterIcon />
          </div>
        </Link>
        <h3 className="text-white text-center pl-4">© {new Date().getFullYear()} EvenMoreSeb</h3>
      </div>
      <ul className="flex border-l border-pink pl-2 ml-2">
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
  )
}

export default NavBottom
