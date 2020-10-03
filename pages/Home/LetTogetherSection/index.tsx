import React from 'react'
import styled from 'styled-components'

import { Colors } from '@constants'
import { Text } from '@components/Text'
import ReviewBox from '@components/screens/Home/ReviewBox'
import { Row, Col } from 'react-bootstrap'

const Container = styled.div`
  text-align: center;
  padding: 20px;
`

const MainTextBox = styled.div`
  padding: 30px 0;
`

const MainText = styled(Text)`
  font-size: 18px;
  color: ${Colors.darkGrey};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const LetTogetherSection = (): JSX.Element => {
  return (
    <Container>
      <MainTextBox>
        <MainText>
          ByLink가 여러분의 연결고리가 되겠습니다. 안전하고 완성도
          높은 프로젝트 진행을 위해 바이링크가 함께하겠습니다.
        </MainText>
      </MainTextBox>
      <Row>
        <Col xs={6} sm={4}>
          <ReviewBox />
        </Col>
        <Col xs={6} sm={4}>
          <ReviewBox />
        </Col>
        <Col xs={6} sm={4}>
          <ReviewBox />
        </Col>
        <Col xs={6} sm={4}>
          <ReviewBox />
        </Col>
        <Col xs={6} sm={4}>
          <ReviewBox />
        </Col>
        <Col xs={6} sm={4}>
          <ReviewBox />
        </Col>
      </Row>
    </Container>
  )
}

export default LetTogetherSection
