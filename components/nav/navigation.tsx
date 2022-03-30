import Link from 'next/link'
import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import SrOnly from '@/components/ui/sr-only'
import { LargeContainer } from '@/components/ui/container.styled'

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
  border-radius: 9999px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  display: inline-flex;
  @media (min-width: 1028px) {
    display: none;
  }
  &:hover {
    background-color: #f9fafb;
  }
  &:focus {
    background-color: #f9fafb;
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
  overflow-y: auto;
  @media (min-width: 1028px) {
    display: none;
  }
`

const AsideWrapper = styled.div`
  padding: 0.75rem;
`

const AsideMenuList = styled.li`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

const AsideMenuButton = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: rgb(17 24 39);
  border-radius: 0.5rem;
  &:hover {
    background-color: #f9fafb;
  }
  &:focus {
    background-color: #f9fafb;
    outline: none;
  }
`

const AsideMenuButtonText = styled.span`
  margin-left: 0.75rem;
  flex: 1 1 0%;
  white-space: nowrap;
`

const CloseButton = styled(Dialog.Close)`
  margin-left: 0.75rem;
  background-color: transparent;
  border: none;
  display: inline-flex;
  padding: 0.5rem;
  border-radius: 9999px;
  cursor: pointer;
  &:hover {
    background-color: #f9fafb;
  }
  &:focus {
    background-color: #f9fafb;
    outline: none;
  }
`

const menus = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

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
                  <AsideWrapper>
                    <ul>
                      <CloseButton>
                        <SrOnly>Close menu</SrOnly>
                        <MenuIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </MenuIcon>
                      </CloseButton>
                      <AsideMenuList>
                        <Link href="/introduction" passHref>
                          <AsideMenuButton>
                            <AsideMenuButtonText>Introduction</AsideMenuButtonText>
                          </AsideMenuButton>
                        </Link>
                      </AsideMenuList>
                      {menus.map((menu) => (
                        <AsideMenuList>
                          <Link href={`/chapter-${menu}`} passHref>
                            <AsideMenuButton>
                              <AsideMenuButtonText>{`Chapter ${menu}`}</AsideMenuButtonText>
                            </AsideMenuButton>
                          </Link>
                        </AsideMenuList>
                      ))}
                    </ul>
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
