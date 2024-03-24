import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ProgressBar from './Contact/ProgressBar'
import NavBottom from './Footer/NavBottom'
import BurgerMenu from './Header/BurgerMenu'
import SideNavBar from './Header/SideNavBar'
import TopNavbar from './Header/TopNavbar'
import { useContext } from '../utils/useContext'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { formLoading } = useContext()
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
            path === '/' ? 'Home' : path.slice(6).charAt(0).toUpperCase() + path.slice(7)
          }`}
        </title>
      </Head>
      <div id='root' className='flex h-screen flex-col xl:flex-row xl:flex-wrap'>
        {mounted && (
          <>
            <header className='relative top-0 z-[25] w-full xl:w-fit xl:min-w-[288px]'>
              <>
                <TopNavbar />
                <BurgerMenu />
                <SideNavBar />
              </>
            </header>
            <main className='flex-1 p-4 lg:container lg:mx-auto'>{children}</main>
            <footer className='flex min-w-full items-end'>{<NavBottom />}</footer>
          </>
        )}
      </div>
      {formLoading && <ProgressBar />}
    </>
  )
}

export default Layout
