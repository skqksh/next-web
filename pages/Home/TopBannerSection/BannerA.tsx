import React, { CSSProperties } from 'react'
import { Row, Col } from 'react-bootstrap'

import { Text } from '@components/Text'
import BannerComp from '@components/screens/Home/Banner'
import { Colors } from '@constants'

const Banner = (): JSX.Element => {
  const styles: Record<string, CSSProperties> = {
    textLg: {
      display: 'inline-block',
      fontSize: 22,
      color: Colors.white,
      backgroundColor: '#000000AA',
      padding: 8,
    },
    textMd: {
      display: 'inline-block',
      fontSize: 18,
      color: Colors.white,
      backgroundColor: '#000000AA',
      padding: 8,
    },
  }

  return (
    <BannerComp
      backgroundImage={
        'https://cdn.pixabay.com/photo/2016/04/11/19/38/bible-1322790_960_720.jpg'
      }
    >
      <Row>
        <Col sm={8}>
          <Text style={styles.textLg}>
            나를 위한 프로젝트를 시작해보세요
          </Text>
          <br />

          <Text style={styles.textMd}>
            Why?
            <br />
            Side Project make you more skillfull
          </Text>

          <br />
          <Text style={styles.textLg}>
            회사에선 하지 못 할 새로운 프로젝트에 도전하세요
          </Text>
        </Col>
        <Col>
          <Text style={styles.textLg}>
            부업으로 돈도 벌고 내 전문성도 높일 수 있는 유일한 기회!!
          </Text>
        </Col>
      </Row>
    </BannerComp>
  )
}

export default Banner
