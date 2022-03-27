import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Navigation from '@/components/nav'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const showNavigation = router.pathname !== '/'
  return (
    <>
      {showNavigation && <Navigation />}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
