import React from 'react'
import styled from 'styled-components'

type BannerProps = {
  backgroundImage: string
  children: React.ReactNode
}

const Container = styled.div<{ backgroundImage: string }>`
  padding-top: 500px;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-image: ${({ backgroundImage }): string =>
    `url(${backgroundImage})`};
  @media only screen and (max-width: 768px) {
    padding-top: 400px;
  }
`

const Contents = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  padding: 150px 0 0 15%;
  color: #ffffff;
  @media only screen and (max-width: 768px) {
    padding: 100px 0 0 8%;
  }
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
