import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { SmallerContainer, GithubIcon } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
import { MagicalButton, Wrapper, WrapperS, Flex, Icon } from './styles'
import Socials from './Socials'
import Title from './Title'

export const Intro = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper theme={theme} as={SmallerContainer}>
      {/* <h1>Hi there, my name is Alexandre</h1> */}
      <Title
        firstName="Alexandre"
        lastName="Ferreira"
        currentPosition="Full-Stack Developer • Freelancing"
        location="Lisbon"
        country="Portugal"
        remote={true} />
      <p>
        I enjoy learning and playing around with React, React Native and Angular technologies.
        <br /> Experience with classic backend stacks and modern front-end frameworks, I'm extremely passionate about all aspects of software engineering, be it research, implementations, libraries or tooling.
      </p>
      <Flex>
          <MagicalButton
            href="https://docs.google.com/document/d/1yxCORtBMNxj_ukgOxoYQfRu3HTUqjtNXwcMajzcftF8"
            rel="noopener noreferrer"
            target="_blank"
          >
            View resume
          </MagicalButton>
          <MagicalButton as={Link} to="/about">
            Get in touch
          </MagicalButton>
          <Socials />
      </Flex>
    </Wrapper>
  )
}