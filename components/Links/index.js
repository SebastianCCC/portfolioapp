import { NewsPaper, PaintBrush, StarIcon } from '../../assets'
import { HomeIcon, LoginIcon, MailIcon, UserIcon, WorkIcon } from './images'

export const NavLinks = [
  {
    icon: <HomeIcon />,
    title: 'Home',
    link: '/',
    mobile: true,
  },
  {
    icon: <WorkIcon />,
    title: 'Work',
    link: '',
    projectContent: true,
    pc: true,
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
  {
    icon: <LoginIcon />,
    title: 'Logout',
    link: '/login',
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
  { name: 'Artwork', title: 'Designs', path: '/work/artwork', icon: <PaintBrush /> },
]
