import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Navigation from '@/components/nav'
import { LargeContainer } from '@/components/ui/container'
import Content from '@/components/ui/content'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (router.pathname !== '/') {
    return (
      <>
        <Navigation />
        <LargeContainer>
          <Content>
            <Component {...pageProps} />
          </Content>
        </LargeContainer>
      </>
    )
  }

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
