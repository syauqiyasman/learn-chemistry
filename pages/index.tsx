import Link from 'next/link'
import styled from 'styled-components'
import PrimaryButton from '@/components/ui/button.styled'
import Container from '@/components/ui/container.styled'

const Background = styled.div`
  background-color: #0369a1;
`

const Hero = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Hero1 = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 1028px) {
    flex-direction: row;
  }
`
const HeroImage = styled.img`
  max-width: 100%;
`

const Introduction = styled.div`
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  @media (min-width: 1028px) {  
    margin-left: 2rem;
    margin-right: 2rem;
  }
`

const Text = styled.h1`
  color: #fff;
`

export default function Home() {
  return (
    <Background>
      <Container>
        <Hero>
          <Hero1>
            <Introduction>
              <Text>
                We are watching you
              </Text>
              <Link href="/neutron-boom" passHref>
                <PrimaryButton as="a">Get started</PrimaryButton>
              </Link>
            </Introduction>
            <HeroImage src="https://res.cloudinary.com/hexabisa/image/upload/v1647955832/react_sqm1rr.png" alt="" />
          </Hero1>
        </Hero>
      </Container>
    </Background>
  )
}
