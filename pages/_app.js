import Layout from '../components/Layout'
import { StateProvider } from '../hooks/StateContext'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import Head from 'next/head'
import ErrorBoundary from '../components/ErrorBoundary'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <StateProvider>
        <ThemeProvider themes={['dark', 'light']} attribute="class">
          <Layout>
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          </Layout>
        </ThemeProvider>
      </StateProvider>
    </>
  )
}

export default MyApp
