import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Container = styled.nav`
  color: blue;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    li {
      list-style-type: none;
      color: red;
      padding: 8px;
      a {
        text-decoration: none;
      }
    }
  }
`

const HomeContainer = styled.nav`
  position: absolute;
  width: 100%;
  z-index: 999;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    li {
      list-style-type: none;
      color: red;
      padding: 8px;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`

const Header = (): JSX.Element => {
  const router = useRouter()
  const HeaderContainer =
    router.pathname === '/' ? HomeContainer : Container
  return (
    <HeaderContainer>
      <ul>
        <li>
          <Link href="/">BY LINK</Link>
        </li>
        <li>
          <Link href="/Portfolio">Portfolio</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/SignUp">SignUp</Link>
        </li>
        <li>
          <Link href="/Login">Login</Link>
        </li>
      </ul>
    </HeaderContainer>
  )
}
export default Header
