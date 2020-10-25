import React from 'react'
import styled from 'styled-components'

const ConDiv = styled.div`
  text-align: center;
`
const Info = styled.div`
  text-align: center;
  height: 400px;
  background-image: url(/images/home/youlink.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`

const WhyDoThisSection = (): JSX.Element => {
  return (
    <ConDiv>
      <Info />
    </ConDiv>
  )
}

export default WhyDoThisSection
