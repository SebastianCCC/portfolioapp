import { useRouter } from 'next/router'
import { getCookieValue, removeCookies } from '../../utils/cookies'
import { replaceRoute } from '../../utils/navigateToRoute'
import ContactSwitch from '../Contact/ContactSwitch'
import { LoginIcon } from '../Links/images'
import NavBarItems from './NavbarItems'

const LoginButtun = ({ onClick }) => {
  const { token } = getCookieValue('token')
  const router = useRouter()

  const events = (eventName) => {
    if (eventName === 'logout') {
      return {
        onClick: () => {
          removeCookies(['token', 'user'])
          replaceRoute('/login', router)
        },
      }
    }

    return {}
  }

  return (
    <>
      <ul className="mb-4">
        <div onClick={onClick}>
          <NavBarItems
            title={token ? 'Logout' : 'Login'}
            link={token ? '' : '/login'}
            icon={<LoginIcon />}
            {...events(token ? 'logout' : null)}
          />
        </div>
      </ul>
      {token ? <ContactSwitch onClick={onClick} /> : null}
    </>
  )
}

export default LoginButtun
