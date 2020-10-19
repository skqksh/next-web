import React from 'react'
import ReactSlick, { Settings, CustomArrowProps } from 'react-slick'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const StyledNextArrow = styled.div`
  position: absolute;
  right: -3%;
  top: 50%;
`

const NextArrow = (props: CustomArrowProps): JSX.Element => {
  const { onClick } = props
  return (
    <StyledNextArrow onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} color="gray" size="lg" />
    </StyledNextArrow>
  )
}

const StyledPrevArrow = styled.div`
  position: absolute;
  left: -3%;
  top: 50%;
`

const PrevArrow = (props: CustomArrowProps): JSX.Element => {
  const { onClick } = props
  return (
    <StyledPrevArrow onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} color="gray" size="lg" />
    </StyledPrevArrow>
  )
}

type SliderProps = {
  items: JSX.Element[]
  settings?: Settings
}

const Slider = ({
  items,
  settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  },
}: SliderProps): JSX.Element => {
  return (
    <ReactSlick {...settings}>
      {_.map(items, (item, i) => {
        return <div key={`ReactSlick-${i}`}>{item}</div>
      })}
    </ReactSlick>
  )
}

export default Slider
