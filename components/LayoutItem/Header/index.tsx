import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Colors } from '@constants'

const ConDiv = styled.div`
  color: blue;
`

const Menu = styled.nav`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`

const LeftMenu = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  li {
    list-style-type: none;
    padding: 8px;
    a {
      object-fit: contain;
      font-family: KoPubDotumPM;
      font-size: 8px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: -0.08px;
      text-align: left;
      color: black;
    }
  }
`

const RightMenu = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  li {
    list-style-type: none;
    padding: 8px;
    a {
      width: 21px;
      height: 9px;
      object-fit: contain;
      font-family: KoPubDotumPB;
      font-size: 8px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: -0.08px;
      text-align: left;
      color: ${Colors.vividBlue};
    }
  }
`

const Header = (): JSX.Element => {
  return (
    <ConDiv>
      <Container>
        <Menu>
          <LeftMenu>
            <li>
              <Link href="/">BY Link</Link>
            </li>
            <li>
              <Link href="/#">바이링크 소개</Link>
            </li>
            <li>
              <Link href="/Project/ProjectList">프로젝트 찾기</Link>
            </li>
            <li>
              <Link href="/#">프로젝트 만들기</Link>
            </li>
          </LeftMenu>
          <RightMenu>
            <li>
              <a href="/#">
                <FontAwesomeIcon icon={faSearch} color="black" />
              </a>
            </li>
            <li>
              <Link href="/Login">로그인</Link>
            </li>
            <li>
              <Link href="/SignUp">SignUp</Link>
            </li>
          </RightMenu>
        </Menu>
      </Container>
    </ConDiv>
  )
}
export default Header
