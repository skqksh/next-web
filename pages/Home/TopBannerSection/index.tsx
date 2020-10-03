import React from 'react'
import { Carousel } from 'react-bootstrap'

import BannerA from './BannerA'
import BannerB from './BannerB'

const TopBannerSection = (): JSX.Element => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <BannerA />
        </Carousel.Item>

        <Carousel.Item>
          <BannerB />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default TopBannerSection
