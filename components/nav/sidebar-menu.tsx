import { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import menus from './menu'

const ChapterTitle = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 500;
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
    background-color: #f3f4f6;
  }
  &:focus {
    background-color: #f3f4f6;
    outline: none;
  }
  &[data-active="true"] {
    background-color: #ede9fe;
    color: #6d28d9;
    font-weight: 500;
  }
`

const AsideMenuButtonText = styled.span`
  margin-left: 0.75rem;
  flex: 1 1 0%;
`

export default function SidebarMenu() {
  const router = useRouter()

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <ul>
      {menus.map((menu) => (
        <Fragment key={menu.title}>
          <ChapterTitle>{menu.title}</ChapterTitle>
          {menu.sub.map((m) => (
            <AsideMenuList key={m}>
              <Link href={`/${m}`} passHref>
                <AsideMenuButton data-active={router.asPath === `/${m}` ? 'true' : 'false'}>
                  <AsideMenuButtonText>{capitalizeFirstLetter(m.split('-').join(' '))}</AsideMenuButtonText>
                </AsideMenuButton>
              </Link>
            </AsideMenuList>
          ))}
        </Fragment>
      ))}
    </ul>
  )
}
