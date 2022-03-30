import styled from 'styled-components'
import Link from 'next/link'
import { LargeContainer } from '@/components/ui/container.styled'

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

const menus = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

export default function Sidebar() {
  return (
    <LargeContainer>
      <Aside aria-label="Sidebar">
        <AsideWrapper>
          <ul>
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
    </LargeContainer>
  )
}
