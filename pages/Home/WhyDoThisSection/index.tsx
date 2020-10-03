import React from 'react'
import styled from 'styled-components'

import { Colors } from '@constants'
import { Text } from '@components/Text'

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-image: url(https://cdn.pixabay.com/photo/2017/08/30/17/26/success-2697951_960_720.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
`

const MainTextBox = styled.div`
  background-color: #00000055;
  padding: 30px 0;
`

const MainText = styled(Text)`
  font-size: 18px;
  color: ${Colors.white};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const WhyDoThisSection = (): JSX.Element => {
  return (
    <Container>
      <MainTextBox>
        <MainText>
          N잡 시대, 모두가 월급만으론 안 된다는 것을 알고있습니다.
          여러분의 스킬을 높이고 돈을 벌 수 있는 프로젝트를 찾으세요
          <br /> <br />
          현업에서 뛰는 다양한 전문가들과 마음에 맞는 아이디어를
          중심으로 모여 사이드 프로젝트를 함께 진행해보세요
        </MainText>
      </MainTextBox>
    </Container>
  )
}

export default WhyDoThisSection
