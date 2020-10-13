import React from 'react'
import { Row, Col } from 'react-bootstrap'

import BannerComp from '@components/screens/Home/Banner'
import {
  MainText,
  SubText,
} from '@components/screens/Home/BannerText'

const Banner = (): JSX.Element => {
  return (
    <BannerComp backgroundImage="https://lh3.googleusercontent.com/q672AjL08qUq0wCJHB2RCw-tlnjzJq9My6xKaFiCuVPGKH9pj1Zn19_kpiIopHDM4hN34U3ovJzu0TF0np2YiK0z4VOdEZSuZRMY_BdgxvCRKe1nmdLoC8xACCB-yJiMbMs2Na1HEfJbFz0sCYJEkCySlwBN7Xal7R3jqJLkhZgJLeSf66EdVmJx94c3EAMUjovxVW085kPP4u7063HxkuguXBwHcy9dd6wvCMjzZL-lK50agNduU7anwcda8VEkPEiHIqEfspEA7KMbqdF5k_VaH1U8zTM9UqeZ0IwSDgiLjEEU2Ma_Ie8lEnFwz4Opx2m6V44KXrner_KMIHeYtbPUVvVJR7oyiTf7KXnj7xiiMJ7btiAaYVsXhXK5SwRTmWjuLjDBJ-BuDFbNjHzfW6n4qF4IGpUViDrnrmJ4X9pW4w0wPwPGpNcZKzajVR8NSpm4laGM9b8qK7EF7G7885PskDDuU307m47UrEclaep0dQHoSJKYUC3xy4XjCyS3S6kG2TO5fWTfg5fOSw8AgUuvvWBGy5fUzNsYdWM7F3UJzWMBFNqh0tcGXYDvBM32dK2uegm8RVsRJ5MBbhfXbayyywdAWTOGGz8ymV0l503JIC1dAmJ1-IJCWaA67S9-cEc14_9utgW4hcnEHs0G9EyuTLdKD5X83b58l_LfVMqX2453BAYvaW90zy0QMw=w960-h640-no?authuser=0">
      <Row>
        <Col>
          <MainText>
            N잡 시대, 모두가 월급만으론 안 된다는 것을 알고있습니다.
            <br />
            여러분의 스킬을 높이고 돈을 벌 수 있는 프로젝트를
            찾으세요.
          </MainText>
          <br />
          <SubText>
            현업에서 뛰는 다양한 전문가들과 <br />
            마음에 맞는 아이디어를 중심으로 모여 사이드 프로젝트를
            함께 진행해보세요.
          </SubText>
        </Col>
      </Row>
    </BannerComp>
  )
}

export default Banner
