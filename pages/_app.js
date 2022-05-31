import Layout from '../components/Layout'
import { StateProvider } from '../hooks/StateContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  )
}

export default MyApp
