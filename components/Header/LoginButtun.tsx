import { useRouter } from 'next/router'
import { getCookieValue, removeCookies } from '../../utils/cookies'
import { replaceRoute } from '../../utils/navigateToRoute'
import ContactSwitch from '../Contact/ContactSwitch'
import { LoginIcon } from '../Links/images'
import NavBarItems from './NavbarItems'

type LoginButtunProps = {
  onClick?: () => void
}

const LoginButtun = ({ onClick }: LoginButtunProps) => {
  // @ts-ignore
  const { token } = getCookieValue('token')
  const router = useRouter()

  const events = (eventName?: string) => {
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
      <ul className='mb-4 px-1'>
        <div onClick={onClick}>
          <NavBarItems
            title={token ? 'Logout' : 'Login'}
            link={token ? '' : '/login'}
            icon={<LoginIcon />}
            {...events(token && 'logout')}
          />
        </div>
      </ul>
      {token ? <ContactSwitch onClick={onClick} /> : null}
    </>
  )
}

export default LoginButtun
