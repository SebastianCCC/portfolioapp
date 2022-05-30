import SideNavBar from './Header/SideNavBar'

const Layout = ({ children }) => {
  return (
    <>
      <header className="relative">
        <SideNavBar />
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
