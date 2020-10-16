import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'

import { Colors } from '@constants'
import { Text } from '@components/Text'
import { TextButton } from '@components/Button'

const ConDiv = styled.div`
  text-align: center;
  padding-top: 80px;
  height: 500px;
  background-color: ${Colors.grey};
`
const MainTextBox = styled.div`
  margin-bottom: 30px;
`
const Text1 = styled(Text)`
  width: 417.5px;
  height: 20px;
  font-family: KOTRA_BOLD;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.08px;
  text-align: left;
  color: ${Colors.vividBlue};
`

const Text2 = styled(Text)`
  width: 239.5px;
  height: 11px;
  font-family: KoPubDotumPL;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.05px;
  text-align: left;
  color: ${Colors.warmGrey};
`
const ButtonBox = styled(TextButton)`
  width: 250px;
  border-radius: 10px;
  box-shadow: 0 10px 7.5px 0 rgba(9, 21, 128, 0.05);
  border: solid 0.5px white;
  background-color: white;
`
const ButtonText = styled(Text)`
  width: 129px;
  height: 13.5px;
  font-family: KOTRA_BOLD;
  font-size: 10px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.75;
  letter-spacing: -0.05px;
  text-align: left;
  color: royalblue;
`
const ButtonTextInfo = styled(Text)`
  width: 202px;
  height: 45px;
  font-family: KoPubDotumPM;
  font-size: 8px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.08px;
  text-align: center;
  color: var(--black);
`
const TopBannerSection = (): JSX.Element => (
  <ConDiv>
    <Container>
      <MainTextBox>
        <Text1>
          스스로 성장하고 새로운 가치를 창출할 수 있는 사이드 프로젝트
        </Text1>
        <br />
        <Text2>
          벌써 수많은 사람들이 사이드 프로젝트를 진행하고 있습니다.
        </Text2>
      </MainTextBox>

      <Row>
        <Col>
          <ButtonBox>
            <ButtonText>
              프로젝트 아이디어가 있나요? (I-worker)
            </ButtonText>
            <br />
            <ButtonTextInfo>
              생생하며, 피가 않는 소담스러운 천자만홍이 소리다. 이것은
              그러므로 수 끓는다. 청춘은 물방아 인생에 속에 듣는다.
              있음으로써 곳으로 피가 가는 위하여서 긴지라 가진 되는
              말이다. 풍부하게 그것은 위하여 청춘의 몸이 있으랴?
            </ButtonTextInfo>
          </ButtonBox>
        </Col>
        <Col>
          <ButtonBox>
            <ButtonText>
              사이드 프로젝트를 찾고 있나요? (Co-worker)
            </ButtonText>
            <br />

            <ButtonTextInfo>
              생생하며, 피가 않는 소담스러운 천자만홍이 소리다. 이것은
              그러므로 수 끓는다. 청춘은 물방아 인생에 속에 듣는다.
              있음으로써 곳으로 피가 가는 위하여서 긴지라 가진 되는
              말이다. 풍부하게 그것은 위하여 청춘의 몸이 있으랴?
            </ButtonTextInfo>
          </ButtonBox>
        </Col>
      </Row>
    </Container>
  </ConDiv>
)

export default TopBannerSection
