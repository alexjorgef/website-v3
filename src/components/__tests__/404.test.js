import React from 'react'
import { render } from '@testing-library/react'
import { StaticQuery } from 'gatsby' // mocked

import FourOhFour from '../404/NotFound'

describe(`components/404`, () => {
  it(`contains NOT FOUND text`, () => {
    const { getByText } = render(<FourOhFour />)

    const el = getByText(`404 PAGE NOT FOUND`)

    expect(el).toBeInTheDocument()
  })
})
