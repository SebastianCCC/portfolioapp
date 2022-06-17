import Link from 'next/link'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { RiSpotifyLine } from 'react-icons/ri'
import { useTheme } from 'next-themes'
import NavBarItems from '../Header/NavbarItems'
import { FooterIcon } from './images'

const NavBottom = () => {
  const { theme } = useTheme()

  return (
    <div className={`p-2 mt-20 flex justify-evenly items-center`}>
      <div className="flex items-center">
        <Link href="#">
          <div className="cursor-pointer">
            <FooterIcon FillRef={theme} />
          </div>
        </Link>
        <h3 className="dark:text-white text-black text-center pl-4">
          © {new Date().getFullYear()} EvenMoreSeb
        </h3>
      </div>
      <ul className="flex px-2 rounded dark:bg-pink">
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
