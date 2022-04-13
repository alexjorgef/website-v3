import React from 'react'
import { Project } from 'components/common'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { pastProjects } = useStaticQuery(graphql`
    query {
      pastProjects: allPastprojectsYaml {
        edges {
          node {
            id
            title
            image {
              childImageSharp {
                fluid(maxWidth: 630) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            link
            description
          }
        }
      }
    }
  `)
  return (
    <Project
      title=""
      projects={pastProjects}
      side
    />
  )
}
