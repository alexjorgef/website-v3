import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import FourOhFour from '../404'

describe(`pages/404`, () => {
  it(`contains NOT FOUND text`, () => {
    const { getByText } = render(<FourOhFour />)
    const el = getByText(`404 PAGE NOT FOUND`)
    const el2 = getByText(`Go Back Home`)

    expect(el).toBeInTheDocument()
    expect(el2).toBeInTheDocument()
  })
  it('renders correctly', () => {
    const tree = renderer.create(<FourOhFour />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
