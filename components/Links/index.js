import { HomeIcon, WorkIcon, UserIcon } from './images'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { RiSpotifyLine } from 'react-icons/ri'

export const NavLinks = [
  {
    icon: <HomeIcon />,
    title: 'Home',
    link: '/',
  },
  {
    icon: <WorkIcon />,
    title: 'Work',
    link: '/work',
  },
  {
    icon: <UserIcon />,
    title: 'About Me',
    link: '/#about',
  },
]

export const SocialLinks = [
  {
    icon: <FiGithub />,
    soclink: 'https://github.com/SebastianCCC',
  },
  {
    icon: <FiLinkedin />,
    soclink: 'https://www.linkedin.com/in/sebastian-christopher-489364238/',
  },
  {
    icon: <RiSpotifyLine />,
    soclink: 'https://open.spotify.com/artist/5kOQRo3IZFZe1TUhyqZZyN?si=q-9zOLxTRkqG9I4zHhDWCw',
  },
]
