import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

const ConDiv = styled.div`
  text-align: center;
`
const Info = styled.div`
  text-align: center;
  height: 400px;
  background-image: url(https://lh3.googleusercontent.com/pw/ACtC-3fvoX5pcF8FGpMpQaHnNG6Imrd2aY1AgOZN1YUPi-7IsV3wJ0jMw8b97GjEHUY6QVt9lvOxp1DEnkGYWM84AUHgR70jgybBMpIAqFPCpJj5uihvcLxAOyb6adeMgj8j3U9CevbygUHIpIOT4AV9o-d8=w1460-h745-no?authuser=0);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const WhyDoThisSection = (): JSX.Element => {
  return (
    <ConDiv>
      <Container>
        <Info />
      </Container>
    </ConDiv>
  )
}

export default WhyDoThisSection
