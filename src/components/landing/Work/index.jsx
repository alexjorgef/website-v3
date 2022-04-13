import React from 'react'
import { graphql } from 'gatsby'
import { Container, Subtitle } from 'components/common'
import SideProjects from './SideProjects'
import Projects from './Projects'

export const imageFields = graphql`
  fragment imageFields on ImageSharp {
    fluid(maxWidth: 630) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
`

export const Work = () => (
  <Container>
    <Subtitle>Featured work</Subtitle>
    <Projects />
    <SideProjects />
  </Container>
)
