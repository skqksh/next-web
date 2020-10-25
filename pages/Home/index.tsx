import React from 'react'

import Layout from '@components/Layout'
import TopBannerSection from './TopBannerSection'
import AskProjectSection from './AskProjectSection'
import WhyDoThisSection from './WhyDoThisSection'
import LetTogetherSection from './LetTogetherSection'
import ProjectListSection from './ProjectListSection'

const Home = (): JSX.Element => (
  <Layout>
    <TopBannerSection />
    <AskProjectSection />
    <ProjectListSection />
    <LetTogetherSection />
    <WhyDoThisSection />
  </Layout>
)

export default Home
