import React from 'react'
import { Row, Col } from 'react-bootstrap'

import BannerComp from '@components/screens/Home/Banner'
import {
  MainText,
  SubText,
} from '@components/screens/Home/BannerText'

const Banner = (): JSX.Element => {
  return (
    <BannerComp backgroundImage="https://lh3.googleusercontent.com/2YzDfBOKCwzPOCVL7sVF4pbPOVLsZMrt6pIWkIELdJ6UOEWWXrqg2VewCTUMxyPZR89oT2bzSiCfWMlRUCbHCiGqop1Fu0nUsJIAZNSd3-bIT2ygdS_8Wop7oIBl0Bkd0kPDH8C8evJh9ztDjyszYrIENWWRDrf1KPHX7ItfLL1ehVCCj2wCFNEoQ0701GSMyfOtfxiN_ma7s9jFlXuHw_Cyzfvg-7Vwz4R3XWN-vyR0Fs0SycvCeioOrmgfJ9lj0JsJApyzJtEErY2nVf8VJCeA6It_g11FLzXd00KZYpI2l8UCOw2XYRLjABbiwmHZsyeJ46iqilMlaNU2k_sXEzq88IWBxvXBSfD72ctTlvoZJkumwQgdvBbmhXgytQr94R1xFHgp2kWxP43qCiSFDmXCw4DXhQYnfbLpJPfRxpob5XQhY4DwDXA_1b9QOuwD6YinKdjRQW2IWR6nyCDOu9QyFaytnaOWMtGm9H-V_htZYhea1HLJtg1QoXbev4xFGMY1GovidvlcAjDdnqyQcU6frkG6GOA_u_qPOn8Zc4VQA-9GjGb4le2oCtWRPA68UtRjoPM6QzNld3T-pIkCCm8mtiCp9lr8ffolOdYEnI6grEY06BaMydqPrReTZCH2LW8exTjf_UpxhGL0nMeo9XEFUvnVRNjpM4PEjYU5qoxXOlsrIZlI8pHJf1Pd5A=w538-h297-no?authuser=0">
      <Row>
        <Col>
          <MainText>
            Why? <br />
            Side Project make you more skillfull
          </MainText>
          <br />
          <SubText>
            나를 위한 프로젝트를 시작해보세요.
            <br /> 회사에선 하지 못 할 새로운 프로젝트에 도전하세요.
          </SubText>
        </Col>
      </Row>
    </BannerComp>
  )
}

export default Banner
