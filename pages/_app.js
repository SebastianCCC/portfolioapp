import Layout from '../components/Layout'
import { StateProvider } from '../hooks/StateContext'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import Head from 'next/head'
import ErrorBoundary from '../components/ErrorBoundary'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [isdark, setIsDark] = useState()
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDark(isDark.matches)
  }, [])
  return (
    <>
      <Head>
        <link rel="icon" href={`${isdark ? '/logo.svg' : '/dark-logo.svg'}`} />
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
