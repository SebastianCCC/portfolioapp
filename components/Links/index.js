import { HomeIcon, WorkIcon, UserIcon, MailIcon } from './images'
import { StarIcon, NewsPaper } from '../../assets'
import { RiGithubFill, RiLinkedinBoxFill, RiSpotifyFill } from 'react-icons/ri'

export const NavLinks = [
  {
    icon: <HomeIcon />,
    title: 'Home',
    link: '/',
    pc: true,
  },
  {
    icon: <WorkIcon />,
    title: 'Work',
    link: '/work',
    projectContent: true,
  },
  {
    icon: <MailIcon />,
    title: 'Contact Me',
    link: '/contact',
  },
  {
    icon: <UserIcon />,
    title: 'About Me',
    link: '/#about',
  },
]

export const SocialLinks = [
  {
    soclink: 'https://github.com/SebastianCCC',
    title: 'Github',
  },
  {
    soclink: 'https://www.linkedin.com/in/sebastian-christopher-489364238/',
    title: 'LinkedIn',
  },
  {
    soclink: 'https://open.spotify.com/artist/5kOQRo3IZFZe1TUhyqZZyN?si=q-9zOLxTRkqG9I4zHhDWCw',
    title: 'Spotify',
  },
]

export const Projects = [
  { name: 'Applications', title: 'Starred', path: '/work/apps', icon: <StarIcon /> },
  { name: 'Articles', title: 'Posts', path: '/work/articles', icon: <NewsPaper /> },
]
