import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'

import { Text } from '@components/Text'

const FootCon = styled.footer`
  background-color: black;
  padding-top: 10px;
  padding-bottom: 20px;
`

const TitleText = styled(Text)`
  font-family: KoPubWorldDotum;
  font-size: 8px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.75;
  letter-spacing: -0.04px;
  text-align: left;
  color: white;
`

const ContentsText = styled(Text)`
  font-family: KoPubWorldDotum;
  font-size: 7px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.04px;
  text-align: left;
  color: white;
`

const CompanyInfo = (): JSX.Element => {
  return (
    <>
      <TitleText>바이링크</TitleText>
      <br />
      <ContentsText>
        상호명: 진지한 컴퍼니 | 대표: 박진이 | 개인정보책임관리:
        박진이 | 사업자등록번호 : 213-22-06392 <br />
        주소: 서울 강남구 선릉로 551 새롬빌딩 5층 | 통신판매업
        신고번호 : 2020-서울 강남-00642 <br />
        이메일: bside_staff@naver.com 전화번호: 0507-1471-5571
      </ContentsText>
    </>
  )
}

const Footer = (): JSX.Element => (
  <FootCon>
    <Container>
      <Row>
        <Col sm={8}>
          <CompanyInfo />
        </Col>
      </Row>
    </Container>
  </FootCon>
)

export default Footer
