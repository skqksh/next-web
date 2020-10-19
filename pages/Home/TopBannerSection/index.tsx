import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'

import { Colors } from '@constants'
import { Text } from '@components/Text'

const ConDiv = styled.div`
  background-image: url(/images/home/top_banner.png);
  background-position: bottom;
  background-repeat: no-repeat;
  background-color: ${Colors.grey};
  background-size: cover;
`

const TextBox = styled.div`
  padding-top: 15%;
  padding-bottom: 17%;
  text-align: right;
`

const MainText = styled(Text)`
  object-fit: contain;
  font-family: KOTRA_BOLD;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: right;
  color: var(--white);
`
const SubText = styled(Text)`
  object-fit: contain;
  font-family: KoPubDotumPL;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.05px;
  text-align: right;
  color: var(--white);
`

const TopBannerSection = (): JSX.Element => (
  <ConDiv>
    <Container>
      <Row>
        <Col>
          <TextBox>
            <MainText>
              진짜 실력자들은 이미 <br />
              현업에서 활동하고 있습니다.
            </MainText>
            <br />
            <SubText>
              이제 이들과 함께 새로운 가치를 창출할 멋진 프로젝트를
              진행해보세요. <br />
              ByLink는 여러분의 열정을 잇습니다.
            </SubText>
          </TextBox>
        </Col>
      </Row>
    </Container>
  </ConDiv>
)

export default TopBannerSection
