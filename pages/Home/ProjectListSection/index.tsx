import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import _ from 'lodash'

import { Text } from '@components/Text'
import ProjectCard from '@components/ProjectCard'
import Slider from '@components/Slider'

const Blinder = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  height: 10%;
  background-color: white;
`

const ConDiv = styled.div`
  text-align: center;
  padding-top: 90px;
  position: relative;
`

const Title = styled(Text)`
  font-family: KOTRA_BOLD;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.5;
  letter-spacing: -0.08px;
  text-align: left;
  color: black;
`

const Section = styled.div`
  margin-bottom: 100px;
  text-align: left;
`

const LetTogetherSection = (): JSX.Element => {
  const [projectList, setProjectList] = useState<JSX.Element[]>([])
  useEffect(() => {
    _.times(4, () => {
      setProjectList((ori) =>
        ori.concat(
          <div style={{ paddingRight: '10%', paddingLeft: '10%' }}>
            <ProjectCard
              {...{
                src: '/images/home/project1.jpg',
                title:
                  '[역삼역] 보너스시스템 WAS 업그레이드 및 웹 서비스 고도화',
                contents:
                  '가치정보기술은 공공, 금융,통신,제조,유/무선서비스 플랫폼 및 빌링솔루션을 기반으로 컨설팅...',
                heartCnt: 123,
              }}
            />
          </div>
        )
      )
    })
  }, [])

  return (
    <ConDiv>
      <Blinder />
      <Container>
        <Section>
          <Title>가장 공감 받은 프로젝트</Title>
          <Slider items={projectList} />
        </Section>
        <Section>
          <Title>최근 업로드 된 프로젝트</Title>
          <Slider items={projectList} />
        </Section>
      </Container>
    </ConDiv>
  )
}

export default LetTogetherSection
