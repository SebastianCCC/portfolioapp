import SideNavBar from './Header/SideNavBar'

const Layout = ({ children }) => {
  return (
    <>
      <header className="relative z-[25]">
        <SideNavBar />
      </header>
      <main className="min-w-full min-h-screen">{children}</main>
    </>
  )
}

export default Layout
