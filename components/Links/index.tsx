import { NewsPaper, PaintBrush, StarIcon } from '../../assets'
import { HomeIcon, MailIcon, UserIcon, WorkIcon } from './images'

export const NavLinks = [
  {
    icon: <HomeIcon />,
    title: 'Home',
    link: '/',
    handleEvent: {
      mobileOnly: true,
    },
  },
  {
    icon: <WorkIcon />,
    title: 'Work',
    link: '',
    handleEvent: {
      name: 'toggleProjectView',
      pcOnly: true,
    },
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
  {
    name: 'Applications',
    title: 'Starred',
    description:
      'A collection of all the cool stuff I have built and worked on. From web apps to mobile.',
    path: '/work/apps',
    icon: <StarIcon />,
  },
  {
    name: 'Articles',
    title: 'Posts',
    description: 'Some interesting articles here, if you are into reading.',
    path: '/work/articles',
    icon: <NewsPaper />,
  },
  {
    name: 'Artwork',
    title: 'Designs',
    description:
      'My passion for webdev started from designing and creating art. Here are some of it.',
    path: '/work/artwork',
    icon: <PaintBrush />,
  },
]
