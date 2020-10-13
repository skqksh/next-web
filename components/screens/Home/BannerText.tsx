import styled from 'styled-components'

import { Text } from '@components/Text'

export const MainText = styled(Text)`
  object-fit: contain;
  font-family: KoPubWorldDotum;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.15px;
  text-align: left;
  color: #ffffff;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`

export const SubText = styled(Text)`
  object-fit: contain;
  font-family: KoPubWorldDotum;
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: left;
  color: #ffffff;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`
