import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { StateContext } from '../hooks/StateContext'
import NavBottom from './Footer/NavBottom'
import Popout from './Header/Popout'
import SideNavBar from './Header/SideNavBar'
import TopNavbar from './Header/TopNavbar'

const Layout = ({ children }) => {
  const { isOpen } = useContext(StateContext)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const path = router.pathname

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <>
      <Head>
        <title>
          {`Seechris - ${
            path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)
          }`}
        </title>
      </Head>
      <div id="root" className="flex flex-col xl:flex-row xl:flex-wrap">
        {mounted && (
          <>
            <header className="relative w-full xl:w-fit xl:min-w-[288px] top-0 z-[25]">
              <>
                <TopNavbar />
                <Popout />
                {!isOpen && <SideNavBar />}
              </>
            </header>
            <main className="md:container md:m-auto flex-1 p-4">{children}</main>
            <footer className="min-w-full">{<NavBottom />}</footer>
          </>
        )}
      </div>
    </>
  )
}

export default Layout
