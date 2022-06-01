import SideNavBar from './Header/SideNavBar'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NavBottom from './Footer/NavBottom'

const Layout = ({ children }) => {
  const router = useRouter()
  const path = router.pathname
  return (
    <>
      <Head>
        <title>
          EvenMoreSeb -{' '}
          {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
        </title>
      </Head>
      <header className="sticky top-0 left-0 z-[25]">
        <SideNavBar />
      </header>
      <main className="min-w-full min-h-screen">{children}</main>
      <footer>
        <NavBottom />
      </footer>
    </>
  )
}

export default Layout
