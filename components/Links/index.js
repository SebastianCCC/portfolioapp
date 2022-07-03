import { HomeIcon, WorkIcon, UserIcon } from './images'
import { RiGithubFill, RiLinkedinBoxFill, RiSpotifyFill } from 'react-icons/ri'

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
    icon: <RiGithubFill />,
    soclink: 'https://github.com/SebastianCCC',
  },
  {
    icon: <RiLinkedinBoxFill />,
    soclink: 'https://www.linkedin.com/in/sebastian-christopher-489364238/',
  },
  {
    icon: <RiSpotifyFill />,
    soclink: 'https://open.spotify.com/artist/5kOQRo3IZFZe1TUhyqZZyN?si=q-9zOLxTRkqG9I4zHhDWCw',
  },
]
