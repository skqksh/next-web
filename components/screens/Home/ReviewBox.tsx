import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

import { Colors } from '@constants'
import { Text } from '@components/Text'

const Container = styled.div`
  background-color: ${Colors.grey};
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 20px;
  height: 200px;
`

const MainTextBox = styled.div`
  padding: 20px 10px;
`
const MainText = styled(Text)`
  font-size: 20px;
  color: ${Colors.black};
`

const ReviewerText = styled(Text)`
  font-size: 14px;
  color: ${Colors.darkGrey};
`

const ReviewBox = (): JSX.Element => (
  <Container>
    <FontAwesomeIcon icon={faQuoteLeft} size="2x" color="white" />
    <MainTextBox>
      <MainText>
        바이링크를 통해서 최고의 파트너를 찾을 수 있었어요
      </MainText>
    </MainTextBox>
    <ReviewerText>OO프로젝트 - 홍길동</ReviewerText>
  </Container>
)

export default ReviewBox
