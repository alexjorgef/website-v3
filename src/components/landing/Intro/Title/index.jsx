import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
// import Social from './Social'
// import Creative from './Creative'
import { Wrapper } from './styles'
import { GithubIcon, BehanceIcon, DribbbleIcon, GitlabIcon, Instagram } from 'components/common'

export default ({firstName, lastName, currentPosition, location, country, remote}) => {
  const { theme } = useContext(ThemeContext)

  	return (
		<Wrapper>
			<h3>Hi there, my name is:</h3>
			<h1>{firstName} <span style={{fontWeight: "bold", fontSize: "1.2em"}}>{lastName}</span></h1>
			<span style={{ fontSize: "1em", color: "gray" }}>{currentPosition}</span>
				<span style={{ fontSize: "0.75rem", color: "gray" }}>🛏️ <span style={{ opacity: 0.6 }}><b>Remote</b></span> 🇵🇹 <span style={{ opacity: 0.6 }}>{location}<b>, {country}</b></span></span>
		</Wrapper>
  )
}
