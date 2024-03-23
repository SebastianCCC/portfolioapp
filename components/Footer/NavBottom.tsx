import Link from 'next/link'
import GradientCard from '../GradientCard'
import { SocialLinks } from '../Links'
import { FooterIcon } from './images'

const NavBottom = () => {
  return (
    <div className='mt-20 w-full'>
      <GradientCard to='top-to-left' animateOnce={true}>
        <div className='flex flex-col-reverse items-center justify-evenly p-8 sm:flex-row sm:p-5'>
          <ul className='flex items-center px-2'>
            {SocialLinks.map(({ soclink, title }) => (
              <div key={title} className='px-4 py-1 text-base dark:text-sec_addition'>
                <a
                  href={soclink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline-offset-1 hover:underline dark:hover:text-white'
                >
                  {title}
                </a>
              </div>
            ))}
          </ul>
          <div className='flex flex-col-reverse items-center sm:flex-row'>
            <h3 className='pt-4 text-center dark:text-sec_addition sm:pr-4 sm:pt-0'>
              © {new Date().getFullYear()} Seechris
            </h3>
            <Link href='#'>
              <div className='cursor-pointer'>
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
