import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Layout from '@components/Layout'
import { Text } from '@components/Text'
import ProjectCard from '@components/ProjectCard'
import { Col, Container, Row } from 'react-bootstrap'

const Banner = styled.div`
  height: 170px;
  background-position: right;
  background-image: url(/images/project/project_total_banner.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  padding-top: 60px;
`

const Title = styled(Text)`
  font-family: KoPubWorldDotum;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: left;
  color: black;
`

const SelectDiv = styled.div`
  padding: 20px 0;
`

const Select = styled.select`
  border: none;
  border-bottom: 1px solid #afafaf;
  font-weight: bold;
  :focus {
    outline: none;
  }
`

const ViewMoreDiv = styled.div`
  padding: 20px 0;
  text-align: center;
`

const ProjectList = (): JSX.Element => {
  return (
    <Layout>
      <Container>
        <Banner>
          <Title>프로젝트 전체보기</Title>
        </Banner>
        <SelectDiv>
          <Select>
            <option>{'전체'}</option>
            <option>{'기획&경영'}</option>
            <option>{'개발자'}</option>
            <option>{'디자이너'}</option>
            <option>{'마케터'}</option>
            <option>{'영상전문가'}</option>
            <option>{'영업&관리'}</option>
          </Select>
        </SelectDiv>
        <Row>
          {_.map([, , , , , , , , , , , ,], (a, index) => {
            return (
              <Col md={3} key={`ProjectList-${index}`}>
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
              </Col>
            )
          })}
        </Row>
        <ViewMoreDiv>
          <Text>더보기</Text>
        </ViewMoreDiv>
      </Container>
    </Layout>
  )
}

export default ProjectList
