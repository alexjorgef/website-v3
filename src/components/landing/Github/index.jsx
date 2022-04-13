import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Project, GithubIcon, Container, Subtitle } from 'components/common'

export const Github = () => {
  const { ghRepos } = useStaticQuery(
    graphql`
      query {
        ghRepos: github {
          repositoryOwner(login: "alexjorgef") {
            repositories(
              first: 7
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <Container>
      {/* <Subtitle>Open Source</Subtitle> */}
      <Project
        icon={GithubIcon}
        type="Github"
        projects={ghRepos.repositoryOwner.repositories.edges}
        link="https://github.com/alexjorgef"
        color="#000"
        github
      />
    </Container>
  )
}
