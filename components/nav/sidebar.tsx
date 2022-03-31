import styled from 'styled-components'
import { LargeContainer } from '@/components/ui/container.styled'
import SidebarMenu from './sidebar-menu'

const Aside = styled.aside`
  background-color: #fff;
  width: 16rem;
  z-index: 10;
  position: fixed;
  top: 4rem;
  bottom: 0;
  overflow-y: auto;
  display: none;
  @media (min-width: 1028px) {
    display: initial;
  }
`

const AsideWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`

export default function Sidebar() {
  return (
    <LargeContainer>
      <Aside aria-label="Sidebar">
        <AsideWrapper>
          <SidebarMenu />
        </AsideWrapper>
      </Aside>
    </LargeContainer>
  )
}
