import React from 'react'
import styled from 'styled-components'

type BannerProps = {
  backgroundImage: string
  children: React.ReactNode
}

const Container = styled.div<{ backgroundImage: string }>`
  padding-top: 40%;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: ${({ backgroundImage }): string =>
    `url(${backgroundImage})`};
`

const Contents = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  padding: 20px;
`

const Banner = ({
  children,
  backgroundImage,
}: BannerProps): JSX.Element => (
  <Container {...{ backgroundImage }}>
    <Contents>{children}</Contents>
  </Container>
)

export default Banner
