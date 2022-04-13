import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
// import Social from './Social'
// import Creative from './Creative'
import { Wrapper, Icon } from './styles'
import { GithubIcon, Twitter, Linkedin, GitlabIcon, Instagram } from 'components/common'

export default () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper>
		<Icon as={Linkedin} />
		<Icon as={GitlabIcon} />
		<Icon as={GithubIcon} />
		<Icon as={Instagram} />
		<Icon as={Twitter} />
    </Wrapper>
  )
}
