import React from 'react'
import { Container } from 'react-bootstrap'

import TopBannerSection from './TopBannerSection'
import AskProjectSection from './AskProjectSection'
import WhyDoThisSection from './WhyDoThisSection'
import LetTogetherSection from './LetTogetherSection'
import ProjectListSection from './ProjectListSection'

const Home = (): JSX.Element => (
  <>
    <TopBannerSection />
    <Container>
      <AskProjectSection />
      <WhyDoThisSection />
      <LetTogetherSection />
      <ProjectListSection />
    </Container>
  </>
)

export default Home
