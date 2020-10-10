import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import _ from 'lodash'

import { Colors } from '@constants'
import { Text } from '@components/Text'
import { TextButton, Button } from '@components/Button'
import { Box } from '@components/LayoutItem'
import ProjectCard from '@components/screens/Home/ProjectCard'

const Container = styled.div`
  text-align: center;
  padding: 20px;
`
const TabButtonBox = styled(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ thisTabMenu, selectedTab, ...rest }) => <TextButton {...rest} />
)`
  background-color: ${({ thisTabMenu, selectedTab }): string =>
    thisTabMenu === selectedTab ? Colors.orange : 'white'};
  color: ${({ thisTabMenu, selectedTab }): string =>
    thisTabMenu === selectedTab ? Colors.white : Colors.text};
`

enum TabMenuEnum {
  popular,
  recent,
}

const TabMenu = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: TabMenuEnum
  setSelectedTab: React.Dispatch<React.SetStateAction<TabMenuEnum>>
}): JSX.Element => (
  <>
    <Row>
      <Col>
        <TabButtonBox
          {...{
            selectedTab,
            thisTabMenu: TabMenuEnum.popular,
            onClick: (): void => {
              setSelectedTab(TabMenuEnum.popular)
            },
          }}
        >
          <Text>최근 가장 공감 받는 프로젝트</Text>
        </TabButtonBox>
      </Col>
      <Col>
        <TabButtonBox
          {...{
            selectedTab,
            thisTabMenu: TabMenuEnum.recent,
            onClick: (): void => {
              setSelectedTab(TabMenuEnum.recent)
            },
          }}
        >
          <Text>최근 업로드 된 프로젝트</Text>
        </TabButtonBox>
      </Col>
    </Row>
  </>
)

const PopularList = (): JSX.Element => (
  <Row>
    {_.times(3, (i) => (
      <Col key={`PopularList-${i}`}>
        <ProjectCard />
      </Col>
    ))}
  </Row>
)

const LetTogetherSection = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<TabMenuEnum>(
    TabMenuEnum.popular
  )

  return (
    <Container>
      <Box>
        <TabMenu {...{ selectedTab, setSelectedTab }} />
      </Box>
      <div style={{ position: 'relative', paddingBottom: 15 }}>
        <Text style={{ fontSize: 22 }}>최신 프로젝트 </Text>
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <Button style={{ backgroundColor: Colors.yellow }}>
            <Text style={{ color: Colors.white }}>
              모든 프로젝트 보기
            </Text>
          </Button>
        </div>
      </div>
      {selectedTab === TabMenuEnum.popular && <PopularList />}
      {selectedTab === TabMenuEnum.recent && <PopularList />}
    </Container>
  )
}

export default LetTogetherSection
