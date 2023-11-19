import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { StateContext } from '../hooks/StateContext'
import NavBottom from './Footer/NavBottom'
import Popout from './Header/Popout'
import SideNavBar from './Header/SideNavBar'
import TopNavbar from './Header/TopNavbar'
import ProgressBar from './Contact/ProgressBar'

const Layout = ({ children }) => {
  const { isOpen, formLoading } = useContext(StateContext)
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
            path === '/'
              ? 'Home'
              : path === '/work'
              ? 'Work'
              : path.slice(6).charAt(0).toUpperCase() + path.slice(7)
          }`}
        </title>
      </Head>
      <div id="root" className="flex flex-col xl:flex-row xl:flex-wrap h-screen">
        {mounted && (
          <>
            <header className="relative w-full xl:w-fit xl:min-w-[288px] top-0 z-[25]">
              <>
                <TopNavbar />
                <Popout />
                {!isOpen && <SideNavBar />}
              </>
            </header>
            <main className="lg:container lg:mx-auto flex-1 p-4">{children}</main>
            <footer className="min-w-full flex items-end">{<NavBottom />}</footer>
          </>
        )}
      </div>
      {formLoading && <ProgressBar />}
    </>
  )
}

export default Layout
