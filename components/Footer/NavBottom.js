import { useTheme } from 'next-themes'
import Link from 'next/link'
import NavBarItems from '../Header/NavbarItems'
import { SocialLinks } from '../Links'
import { FooterIcon } from './images'
import GradientCard from '../GradientCard'

const NavBottom = () => {
  const { theme } = useTheme()

  return (
    <div className="mt-20 xl:mt-40">
      <GradientCard to="top-to-left" animateOnce={true}>
        <div className="p-8 sm:p-5 flex flex-col-reverse sm:flex-row justify-evenly items-center">
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
          <div className="flex flex-col-reverse sm:flex-row items-center">
            <h3 className="text-center pt-4 sm:pr-4 sm:pt-0 dark:text-sec_addition">
              © {new Date().getFullYear()} Seechris
            </h3>
            <Link href="#">
              <div className="cursor-pointer">
                <FooterIcon />
              </div>
            </Link>
          </div>
        </div>
      </GradientCard>
    </div>
  )
}

export default NavBottom
