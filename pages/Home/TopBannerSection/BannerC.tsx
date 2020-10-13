import React from 'react'
import { Row, Col } from 'react-bootstrap'

import BannerComp from '@components/screens/Home/Banner'
import {
  MainText,
  SubText,
} from '@components/screens/Home/BannerText'

const Banner = (): JSX.Element => {
  return (
    <BannerComp backgroundImage="https://lh3.googleusercontent.com/XzV9h3G6eDfwQXqCu9l1aw7H9p8ECtvrXjlVYYHMncirjln2o7GPv4fL6GDTqCmDw-LTlner3ImSgGd5GgVCnTWlaBYexycCpIRhwj1PmxKG1jIYfW_ZV2HdGO9_MGPR6AAORfXYEOMAs5FlBKnojZw_7dEaMRTpHA2oW0MfIxwrNPZVi7XH679G1XD_kKHhvdY68pbBuvmTOAT0STiYlZW5aK12FUR406TnGf3cKjfcIBx6h4CrInOO6o1lmOwv-a_DBM3nfbdWGUvA_gB5IVuwfMJweG8mbyJqkpVIfuCTyP4u4C37dbSpyjwUqpkjl5mytDuGTzbflb5BuoCEGixU1NM6X5icjVjMSys_OYzo82TzOTYPX7I8R6CGb5Sr-RtJzGgDsqqrACrxMPmrW-6hTO1g3yO0izId9PwMxzQpvHXeMzehh_ncfdzjkPM_CLFj2PW6A1R17XpmeU_rFBFt-ePe-e4LYutlB9h1h9WB21_TV0_yI3oi5Xwk_WrTvDGKRO8djGK9r7NBj4nwNCJyJ8YUQm0Nh9Ye_ljB5toDAtIV3Xlp1-RPoF8L7Hud4qlZkqkOwOYyDssvGREzfnH2ivIdWzRUncxrx898AP_mzhczfEjL7ySXbCDNYWkwtlWs8GApWTAruTj7Tw0wK4dpMY8aQSlTiAWtTMgVtrZNKLoV0OPGyLVGMSQJQQ=w960-h641-no?authuser=0">
      <Row>
        <Col>
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
        </Col>
      </Row>
    </BannerComp>
  )
}

export default Banner
