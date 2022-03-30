import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Navigation from '@/components/nav'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (router.pathname !== '/') {
    return (
      <>
        <Navigation />
        <Component {...pageProps} />
      </>
    )
  }

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
