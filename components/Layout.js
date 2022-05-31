import SideNavBar from './Header/SideNavBar'
import Head from 'next/head'
import { useRouter } from 'next/router'

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
      <header className="relative z-[25]">
        <SideNavBar />
      </header>
      <main className="min-w-full min-h-screen">{children}</main>
    </>
  )
}

export default Layout
