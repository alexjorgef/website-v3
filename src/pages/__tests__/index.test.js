import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import { StaticQuery, useStaticQuery, graphql } from 'gatsby' // mocked
import Index from '../index'
import skillsData from '../../../tests/__fixtures__/skills.json'
import projectsData from '../../../tests/__fixtures__/pastProjects.json'
import githubProjectsData from '../../../tests/__fixtures__/ghRepos.json'
import sideProjectsData from '../../../tests/__fixtures__/sideProjects.json'
import popularPosts from '../../../tests/__fixtures__/popularPosts.json'

beforeEach(() => {})
describe(`pages/Index`, () => {
  it('renders correctly', () => {
    const data = {
      ...skillsData,
      ...projectsData,
      ...githubProjectsData,
      ...sideProjectsData,
      ...popularPosts,
    }
    useStaticQuery.mockImplementation(() => ({ ...data }))
    const treeRenderer = renderer.create(<Index />).toJSON()
    expect(treeRenderer).toMatchSnapshot()
  })

  it('renders correctly from data file values', () => {
    const { container } = render(<Index />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
