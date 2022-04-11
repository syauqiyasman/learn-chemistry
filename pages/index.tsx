import Link from 'next/link'
import styled from 'styled-components'
import PrimaryButton from '@/components/ui/button'
import Container from '@/components/ui/container'

const Background = styled.div`
  background-color: #fff;
`

const Hero = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Introduction = styled.div`
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
`

const Text = styled.h1`
  color: #000;
  padding-bottom: 1rem;
`

const StartButton = styled(PrimaryButton)`
  width: 100%;
  max-width: 20rem;
`

export default function Home() {
  return (
    <Background>
      <Container>
        <Hero>
          <Introduction>
            <Text>
              Learn chemistry for free
            </Text>
            <Link href="/about" passHref>
              <StartButton as="a">Get started</StartButton>
            </Link>
          </Introduction>
        </Hero>
      </Container>
    </Background>
  )
}
