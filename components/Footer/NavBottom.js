import { useTheme } from 'next-themes'
import Link from 'next/link'
import NavBarItems from '../Header/NavbarItems'
import { SocialLinks } from '../Links'
import { FooterIcon } from './images'

const NavBottom = () => {
  const { theme } = useTheme()

  return (
    <div className={`p-2 mt-20 flex flex-col-reverse xl:flex-row justify-evenly items-center`}>
      <ul className="flex items-center px-2">
        {SocialLinks.map(({ soclink, title }, i) => (
          <div key={i} className="py-1 text-tertiary text-base uppercase px-4">
            <a href={soclink} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </div>
        ))}
      </ul>
      <div className="flex flex-col-reverse xl:flex-row items-center">
        <h3 className="text-center pt-4 xl:pr-4 xl:pt-0 text-tertiary uppercase">
          © {new Date().getFullYear()} Seechris
        </h3>
        <Link href="#">
          <div className="cursor-pointer">
            <FooterIcon />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NavBottom
