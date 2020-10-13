import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import { Text } from '@components/Text'
import { TextButton } from '@components/Button'

import Idea from '@components/Svg/Idea'
import Search from '@components/Svg/Search'

const Container = styled.div`
  text-align: center;
  padding: 20px;
  height: 500px;
`
const MainTextBox = styled.div`
  margin-bottom: 30px;
`
const Text1 = styled(Text)`
  width: 620.5px;
  height: 39px;
  font-family: KoPubWorldDotum;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.13px;
  text-align: left;
  color: #111111;
`

const Text2 = styled(Text)`
  width: 355.5px;
  height: 23.5px;
  font-family: KoPubWorldDotum;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.08px;
  text-align: left;
  color: #7a7a7a;
`

const ButtonText = styled(Text)`
  width: 223px;
  height: 41px;
  font-family: KoPubWorldDotum;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: -0.06px;
  text-align: left;
  color: #111111;
`

const TopBannerSection = (): JSX.Element => (
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
        <TextButton>
          <ButtonText>
            프로젝트 아이디어가 있나요? (I-worker)
          </ButtonText>
          <br /> <br />
          <Idea style={{ width: 140, height: 140 }} />
        </TextButton>
      </Col>
      <Col>
        <TextButton>
          <ButtonText>
            사이드 프로젝트를 찾고 있나요? (Co-worker)
          </ButtonText>
          <br /> <br />
          <Search style={{ width: 170, height: 170 }} />
        </TextButton>
      </Col>
    </Row>
  </Container>
)

export default TopBannerSection
