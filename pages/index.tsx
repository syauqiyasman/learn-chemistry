import styled from 'styled-components'
import PrimaryButton from '@/components/ui/button.styled'
import Container from '@/components/ui/container.styled'

const Hero = styled.main`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  min-height: 100vh;
`

const HeroImageWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
  margin-left: auto;
`

const HeroImage = styled.img`
`

const Introduction = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
  margin-top: auto;
  margin-bottom: auto;
`

export default function Home() {
  return (
    <Container>
      <Hero>
        <HeroImageWrapper>
          <HeroImage src="https://res.cloudinary.com/hexabisa/image/upload/v1647955832/react_sqm1rr.png" alt="" />
        </HeroImageWrapper>
        <Introduction>
          <h1>
            Hi there!
          </h1>
          <p>
            We are watching you
          </p>
          <PrimaryButton>Get started!</PrimaryButton>
        </Introduction>
      </Hero>
    </Container>
  )
}
