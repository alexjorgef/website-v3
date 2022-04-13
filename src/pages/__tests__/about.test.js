import React from 'react'
import { render } from '@testing-library/react'
import { StaticQuery, useStaticQuery, graphql } from 'gatsby' // mocked
import About from '../about'
import about from '../../../tests/__fixtures__/about.json'
import aboutImage from '../../../tests/__fixtures__/aboutImage.json'

describe('pages/About', () => {
  it('renders correctly from data file values', () => {
    const data = {
      ...about,
      ...aboutImage,
    }
    useStaticQuery.mockImplementation(() => ({ ...data }))
    const { container } = render(<About />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
