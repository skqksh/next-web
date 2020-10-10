import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import { Colors } from '@constants'
import { Text } from '@components/Text'
import { Button } from '@components/Button'

const Container = styled.div`
  text-align: center;
  background-color: ${Colors.primary};
  padding: 20px;
`

const MainTextBox = styled.div`
  margin-bottom: 20px;
`

const MainText = styled(Text)`
  color: ${Colors.white};
`

const ButtonText = styled(Text)`
  color: ${Colors.white};
`

const TopBannerSection = (): JSX.Element => (
  <Container>
    <MainTextBox>
      <MainText>
        스스로 성장하고 새로운 가치를 창출할 수 있는 사이드 프로젝트
        벌써 수많은 사람들이 사이드 프로젝트를 진행하고 있습니다.
      </MainText>
    </MainTextBox>
    <Row>
      <Col>
        <Button>
          <ButtonText>
            프로젝트 아이디어가 있나요?
            <br />
            (I-worker)
          </ButtonText>
        </Button>
      </Col>
      <Col>
        <Button>
          <ButtonText>
            사이드 프로젝트를 찾고 있나요?
            <br />
            (Co-worker)
          </ButtonText>
        </Button>
      </Col>
    </Row>
  </Container>
)

export default TopBannerSection
