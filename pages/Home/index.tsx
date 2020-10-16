import React from 'react'

import TopBannerSection from './TopBannerSection'
import AskProjectSection from './AskProjectSection'
import WhyDoThisSection from './WhyDoThisSection'
import LetTogetherSection from './LetTogetherSection'
import ProjectListSection from './ProjectListSection'

const Home = (): JSX.Element => (
  <>
    <TopBannerSection />
    <AskProjectSection />
    <ProjectListSection />
    <LetTogetherSection />
    <WhyDoThisSection />
  </>
)

export default Home
