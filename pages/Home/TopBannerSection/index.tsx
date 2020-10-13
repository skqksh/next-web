import React from 'react'
import { Carousel } from 'react-bootstrap'

import BannerA from './BannerA'
import BannerB from './BannerB'
import BannerC from './BannerC'

const TopBannerSection = (): JSX.Element => (
  <>
    <Carousel>
      <Carousel.Item>
        <BannerA />
      </Carousel.Item>

      <Carousel.Item>
        <BannerB />
      </Carousel.Item>

      <Carousel.Item>
        <BannerC />
      </Carousel.Item>
    </Carousel>
  </>
)

export default TopBannerSection
