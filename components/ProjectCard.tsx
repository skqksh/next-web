import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

import { Text } from '@components/Text'

const ConDiv = styled.div`
  padding: 0 0 10px;
`

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 2.5px 5px 0 rgba(9, 21, 128, 0.15);
  border: solid 0.5px rgba(51, 56, 59, 0.01);
`

const Title = styled.div`
  font-family: KoPubDotumPB;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: -0.05px;
  text-align: left;
  color: black;
`
const Contens = styled.div`
  font-family: KoPubDotumPM;
  font-size: 8px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.08px;
  text-align: left;
  color: black;
`

type ProjectCardProps = {
  src: string
  title: string
  contents: string
  heartCnt: number
}

const ProjectCard = ({
  src,
  title,
  contents,
  heartCnt,
}: ProjectCardProps): JSX.Element => (
  <ConDiv>
    <Img src={src} />
    <Title>{title}</Title>
    <Contens>{contents}</Contens>
    <div style={{ textAlign: 'right' }}>
      <FontAwesomeIcon
        icon={faHeart}
        color="gray"
        style={{ marginRight: 5 }}
      />
      <Text>{`${heartCnt}`}</Text>
    </div>
  </ConDiv>
)

export default ProjectCard
