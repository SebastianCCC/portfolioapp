import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'
import Layout from '../components/Layout'
import '../styles/globals.css'
import { StateProvider } from '../providers/StateContext'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [isdark, setIsDark] = useState<boolean | undefined>()
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDark(isDark.matches)
  }, [])
  return (
    <>
      <Head>
        <link rel='icon' href={`${isdark ? '/logo.svg' : '/dark-logo.svg'}`} />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
      </Head>
      <StateProvider>
        <ThemeProvider themes={['dark', 'light']} defaultTheme='dark' attribute='class'>
          <Layout>
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          </Layout>
        </ThemeProvider>
      </StateProvider>
      <Analytics />
    </>
  )
}

export default MyApp
