import styled from 'styled-components'

const Container = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
`

export default Container
