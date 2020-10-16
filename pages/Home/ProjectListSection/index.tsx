import React from 'react'
import styled from 'styled-components'

const ConDiv = styled.div`
  text-align: center;
  padding-top: 60px;
  padding-bottom: 60px;
`
const PopularProjectBox = styled.div`
  height: 260px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(https://lh3.googleusercontent.com/pw/ACtC-3euQiaGdWkG1Nu8KLHGdtVnmuxN0UlqbBsk4kcnfycubWNjeNChOpLNInde_a834lX4nFRKqqDbvbEMgZGroceV4vdFOxwawMTjrT3tdyyFIEic4yXbtBQhL7LBF05No6QaEhvafb8JMlTTfqKB_hvF=w1717-h486-no);
`
const RecentProjectBox = styled.div`
  height: 260px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(https://lh3.googleusercontent.com/pw/ACtC-3d3kqSXfUrKbOWmzcOiqFPXYs-bRI27Yh8KIUHXhXz1vnxLVoO6QGtav0yWDHBSClLiTuH_aYKXqZ2yoBETzJGvyDyom_uGpao1J4T2AV2RZ5yh07LY9IMTJEMxGKi3wAP_ve9HYmxNmH0Xk3a8Eq-q=w1717-h486-no);
`

const LetTogetherSection = (): JSX.Element => {
  return (
    <ConDiv>
      <PopularProjectBox />
      <br />
      <br />
      <RecentProjectBox />
    </ConDiv>
  )
}

export default LetTogetherSection
