import { useTheme } from 'next-themes'
import Link from 'next/link'
import NavBarItems from '../Header/NavbarItems'
import { SocialLinks } from '../Links'
import { FooterIcon } from './images'

const NavBottom = () => {
  const { theme } = useTheme()

  return (
    <div className={`p-5 mt-20 flex flex-col-reverse xl:flex-row justify-evenly items-center`}>
      <ul className="flex items-center px-2">
        {SocialLinks.map(({ soclink, title }, i) => (
          <div key={i} className="py-1 dark:text-sec_addition text-base uppercase px-4">
            <a
              href={soclink}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:hover:text-white hover:underline underline-offset-1"
            >
              {title}
            </a>
          </div>
        ))}
      </ul>
      <div className="flex flex-col-reverse xl:flex-row items-center">
        <h3 className="text-center pt-4 xl:pr-4 xl:pt-0 dark:text-sec_addition uppercase">
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
