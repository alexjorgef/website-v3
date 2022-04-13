import React from 'react'
import { Intro, Skills, Work, Github, Popular } from 'components/landing'
import { Layout, SEO } from 'components/common'

export default () => (
  <Layout>
    <SEO title="Full Stack Developer @ Portugal" type="Organization" />
    <Intro />
    <Skills />
    <Work />
    <Github />
    <Popular />
  </Layout>
)
