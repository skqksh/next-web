import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'

const FootCon = styled.footer`
  background-color: black;
`

const CompanyInfo = styled.footer`
  background-image: url(https://lh3.googleusercontent.com/pw/ACtC-3f3tqV9H61wTJpYEbd_x4s00yzJh0cCV4LY_mYdTBqbDu9DKPAbxi7cNCu-CCMGTYqFvUv-tGjCSuIkzirNDKINamlvRtDj9WVLF4GiLG8n6RFfS_xyKRwCxL3rE33WZfU9RaWlV7KPvsa1pL_nLdxx=w949-h176-no?authuser=0);
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

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
