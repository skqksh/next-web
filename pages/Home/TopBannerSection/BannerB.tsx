import React, { CSSProperties } from 'react'
import { Row, Col } from 'react-bootstrap'

import { Text } from '@components/Text'
import BannerComp from '@components/screens/Home/Banner'
import { Colors } from '@constants'

const Banner = (): JSX.Element => {
  const styles: Record<string, CSSProperties> = {
    textLg: {
      display: 'inline-block',
      fontSize: 26,
      color: Colors.white,
      padding: 8,
    },
    textMd: {
      display: 'inline-block',
      fontSize: 18,
      color: Colors.white,
      padding: 8,
    },
  }

  return (
    <BannerComp
      backgroundImage={
        'https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg'
      }
    >
      <Row>
        <Col sm={8}>
          <Text style={styles.textLg}>
            진짜 실력자들은 이미 현업에서 활동하고 있습니다.
          </Text>
          <br />

          <Text style={styles.textMd}>
            이제 이들과 함께 새로운 가치를 창출할 멋진 프로젝트를
            진행해보세요.
          </Text>

          <br />
          <Text style={styles.textLg}>
            ByLink는 여러분의 열정을 잇습니다.
          </Text>
        </Col>
      </Row>
    </BannerComp>
  )
}

export default Banner
