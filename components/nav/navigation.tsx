import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import SrOnly from '@/components/ui/sr-only'
import { LargeContainer } from '@/components/ui/container'
import SidebarMenu from './sidebar-menu'

const NavigationBorder = styled.div`
  border-bottom: 1px solid #eaeaea;
  background-color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 20;
`

const NavigationBar = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MenuButton = styled(Dialog.Trigger)`
  padding: 0.75rem;
  margin-left: -0.75rem;
  border-radius: 9999px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  display: inline-flex;
  @media (min-width: 1028px) {
    display: none;
  }
  &:hover {
    background-color: #f3f4f6;
  }
  &:focus {
    background-color: #f3f4f6;
    outline: none;
  }
`

const MenuIcon = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`

// Menu
const Aside = styled.aside`
  background-color: #fff;
  width: 16rem;
  z-index: 20;
  position: fixed;
  top: 0;
  bottom: 0;
  border-right: 1px solid #eaeaea;
  overflow-y: auto;
  @media (min-width: 1028px) {
    display: none;
  }
`

const AsideWrapper = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`

const SideHeader = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`

const CloseButton = styled(Dialog.Close)`
  margin-left: -0.75rem;
  background-color: transparent;
  border: none;
  display: inline-flex;
  padding: 0.75rem;
  border-radius: 9999px;
  cursor: pointer;
  &:hover {
    background-color: #f3f4f6;
  }
  &:focus {
    background-color: #f3f4f6;
    outline: none;
  }
`

export default function VerticalNavigation() {
  return (
    <NavigationBorder>
      <LargeContainer>
        <NavigationBar>
          <Dialog.Root>
            <MenuButton>
              <SrOnly>Open menu</SrOnly>
              <MenuIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </MenuIcon>
            </MenuButton>
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content>
                <Aside aria-label="Sidebar">
                  <SideHeader>
                    <CloseButton>
                      <SrOnly>Close menu</SrOnly>
                      <MenuIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </MenuIcon>
                    </CloseButton>
                  </SideHeader>
                  <AsideWrapper>
                    <SidebarMenu />
                  </AsideWrapper>
                </Aside>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </NavigationBar>
      </LargeContainer>
    </NavigationBorder>
  )
}
