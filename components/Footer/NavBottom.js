import { useTheme } from 'next-themes'
import Link from 'next/link'
import NavBarItems from '../Header/NavbarItems'
import { SocialLinks } from '../Links'
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
        {SocialLinks.map(({ icon, soclink }, i) => (
          <NavBarItems key={i} icon={icon} socLink={soclink} />
        ))}
      </ul>
    </div>
  )
}

export default NavBottom
