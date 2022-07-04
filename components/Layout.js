import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { StateContext } from '../hooks/StateContext'
import ContactForm from './Contact/ContactForm'
import NavBottom from './Footer/NavBottom'
import Popout from './Header/Popout'
import SideNavBar from './Header/SideNavBar'
import TopNavbar from './Header/TopNavbar'

const Layout = ({ children }) => {
  const { isOpen, isContactOpen } = useContext(StateContext)
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
          Seechris - {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
        </title>
      </Head>
      <header className="sticky top-0 left-0 z-[25]">
        {mounted && (
          <>
            <TopNavbar />
            {isOpen ? <Popout /> : <SideNavBar />}
          </>
        )}
      </header>
      <main className="min-w-full min-h-screen p-4">
        {children}
        {isContactOpen && <ContactForm />}
      </main>
      <footer>{mounted && <NavBottom />}</footer>
    </>
  )
}

export default Layout
