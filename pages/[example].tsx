import { LargeContainer } from '@/components/ui/container.styled'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Content = styled.div`
  padding-top: 4rem;
  @media (min-width: 1028px){
    padding-left: calc(16rem + 2rem);
  }
`

const times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

export default function ExamplePage() {
  const router = useRouter()

  const asbdajds = `You are accessing the ${router.asPath} page.`

  return (
    <LargeContainer>
      <Content>
        <h1>{router.asPath.split('/')}</h1>
        {times.map((time) => (
          <p key={time}>
            {asbdajds}
          </p>
        ))}
      </Content>
    </LargeContainer>
  )
}
