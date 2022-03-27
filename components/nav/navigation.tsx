import Link from 'next/link'
import styled from 'styled-components'
import SrOnly from '@/components/ui/sr-only'
import { LargeContainer } from '@/components/ui/container.styled'

const NavigationBorder = styled.div`
  border-bottom: 1px solid #eaeaea;
  background-color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
`

const NavigationBar = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MenuIcon = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`

export default function VerticalNavigation() {
  return (
    <NavigationBorder>
      <LargeContainer>
        <NavigationBar>
          <Link href="/">
            <a>
              <SrOnly>Home</SrOnly>
              <h2>Chemistry</h2>
            </a>
          </Link>
          <div className="rounded-md p-2 inline-flex items-center justify-center text-light-on-bgn-s dark:text-dark-on-bgn-s hover:text-light-on-bgn-p dark:hover:text-dark-on-bgn-p">
            <SrOnly>Open menu</SrOnly>
            <MenuIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </MenuIcon>
          </div>
        </NavigationBar>
      </LargeContainer>
    </NavigationBorder>
  )
}
