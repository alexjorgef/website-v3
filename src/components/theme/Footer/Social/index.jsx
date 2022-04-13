import React from 'react'
import {
  Twitter,
  GithubIcon,
  Instagram,
  Unsplash,
  Linkedin,
} from 'components/common'
import { Social, Grow } from './styles.js'

export default () => {
  const social = [
    {
      id: 0,
      name: 'Twitter',
      link: 'https://twitter.com/alexandrejorgef',
      icon: Twitter,
      last: false,
    },
    {
      id: 1,
      name: 'Github',
      link: 'https://github.com/alexjorgef',
      icon: GithubIcon,
      last: false,
    },
    {
      id: 2,
      name: 'Instagram',
      link: 'https://instagram.com/alexontech',
      icon: Instagram,
      last: false,
    },
    {
      id: 3,
      name: 'Linkedin',
      link: 'https://linkedin.com/in/alexjferreira',
      icon: Linkedin,
      last: false,
    },
  ]
  return (
    <li>
      {social.map(({ id, name, link, icon, last }) => (
        <Social
          key={id}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`follow me on ${name}`}
          href={link}
          last={last}
        >
          <Grow as={icon} width="24" height="24" />
        </Social>
      ))}
    </li>
  )
}
